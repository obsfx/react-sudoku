import create, { SetState } from 'zustand'

export interface State {
  time: number
  board: { value: number; predefined: boolean }[][]
  emptyCellCount: number
  moves: { r: number; c: number; value: number }[]
  conflictedCells: {
    r: number
    c: number
    value: number
    move: { r: number; c: number }
  }[]

  reset: () => void
  setTime: (time: number) => void
  setBoard: (board: { value: number; predefined: boolean }[][]) => void
  setCell: (r: number, c: number, value: number) => void
  setMoves: (moves: { r: number; c: number; value: number }[]) => void
  setConflictedCells: (
    cells: {
      r: number
      c: number
      value: number
      move: { r: number; c: number }
    }[]
  ) => void
}

const useStore = create<State>(
  (set: SetState<State>): State => ({
    time: 0,
    board: [],
    moves: [],
    emptyCellCount: 0,
    conflictedCells: [],

    reset: () =>
      set({
        time: 0,
        board: [],
        moves: [],
        conflictedCells: [],
      }),
    setTime: (time: number) => set({ time }),
    setBoard: (board: { value: number; predefined: boolean }[][]) => {
      set({ board })
      if (board) {
        set({
          emptyCellCount: board.reduce(
            (prev, current) => prev + current.filter(({ predefined }) => !predefined).length,
            0
          ),
        })
      }
    },
    setCell: (r: number, c: number, newVal: number) => {
      set((state) => ({
        board: state.board.map((row: { value: number; predefined: boolean }[], i: number) =>
          row.map(({ value, predefined }, j: number) =>
            i === r && j === c ? { value: newVal, predefined } : { value, predefined }
          )
        ),
      }))

      set((state) => ({
        emptyCellCount: state.board
          ? state.board.reduce(
              (prev, current) => prev + current.filter(({ value }) => value === 0).length,
              0
            )
          : 0,
      }))
    },
    setMoves: (moves: { r: number; c: number; value: number }[]) => {
      set({ moves })
    },
    setConflictedCells: (
      cells: {
        r: number
        c: number
        value: number
        move: { r: number; c: number }
      }[]
    ) => set({ conflictedCells: cells }),
  })
)

export default useStore
