import create, { SetState } from 'zustand'

export interface State {
  time: number
  board: null | number[][]
  moves: { r: number; c: number; value: number }[]
  conflictedCells: { r: number; c: number; value: number }[]

  setTime: (time: number) => void
  setBoard: (board: null | number[][]) => void
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
    setBoard: (board: null | number[][]) => set({ board }),
    setCell: (r: number, c: number, value: number) =>
      set((state) =>
        !state.board
          ? { board: null }
          : {
              board: state.board.map((row: number[], i: number) =>
                row.map((col: number, j: number) => (i === r && j === c ? value : col))
              ),
            }
      ),
    setMoves: (moves: { r: number; c: number; value: number }[]) => set({ moves }),
    setConflictedCells: (cells: { r: number; c: number; value: number }[]) =>
      set({ conflictedCells: cells }),
  })
)

export default useStore
