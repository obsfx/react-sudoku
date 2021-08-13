import create, { SetState } from 'zustand'

export interface State {
  time: number
  board: null | { value: number; predefined: boolean }[][]
  moves: { r: number; c: number; value: number }[]
  conflictedCells: { r: number; c: number; value: number }[]

  setTime: (time: number) => void
  setBoard: (board: null | { value: number; predefined: boolean }[][]) => void
  setCell: (r: number, c: number, value: number) => void
  setMoves: (moves: { r: number; c: number; value: number }[]) => void
  setConflictedCells: (cells: { r: number; c: number; value: number }[]) => void
}

const useStore = create<State>(
  (set: SetState<State>): State => ({
    time: 0,
    board: null,
    moves: [],
    conflictedCells: [],

    setTime: (time: number) => set({ time }),
    setBoard: (board: null | { value: number; predefined: boolean }[][]) => set({ board }),
    setCell: (r: number, c: number, newVal: number) =>
      set((state) =>
        !state.board
          ? { board: null }
          : {
              board: state.board.map((row: { value: number; predefined: boolean }[], i: number) =>
                row.map(({ value, predefined }, j: number) =>
                  i === r && j === c ? { value: newVal, predefined } : { value, predefined }
                )
              ),
            }
      ),
    setMoves: (moves: { r: number; c: number; value: number }[]) => set({ moves }),
    setConflictedCells: (cells: { r: number; c: number; value: number }[]) =>
      set({ conflictedCells: cells }),
  })
)

export default useStore
