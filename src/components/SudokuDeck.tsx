import { useState } from 'react'
import { DeckWrapper, DeckRow, DeckCell, DeckInput } from '../theme'
import useStore from '../store'

const SudokuDeck: React.FC<{
  board: { value: number; predefined: boolean }[][]
  preview: boolean
  cellWidth: string
  cellHeight: string
}> = ({ board, preview, cellWidth, cellHeight }) => {
  const [valueBuffer, setValueBuffer] = useState(0)

  const setCell = useStore((state) => state.setCell)
  const moves = useStore((state) => state.moves)
  const setMoves = useStore((state) => state.setMoves)
  const conflictedCells = useStore((state) => state.conflictedCells)
  const setConflictedCells = useStore((state) => state.setConflictedCells)
  const emptyCellCount = useStore((state) => state.emptyCellCount)

  const handleOnFocus = (r: number, c: number, value: string) => {
    setValueBuffer(Number(value))
    setCell(r, c, 0)
  }

  const handleOnChange = (r: number, c: number, value: string) => {
    if (/^[1-9]+$/.test(value)) {
      setCell(r, c, Number(value))
    }
  }

  const handleOnBlur = (r: number, c: number, value: string) => {
    const cellVal = valueBuffer !== 0 && Number(value) === 0 ? valueBuffer : Number(value)

    setCell(r, c, cellVal)
    if (cellVal !== 0) {
      checkRow(r, c, cellVal)
    }
    setMoves([
      ...moves.filter(({ r: mr, c: mc }) => mr !== r && mc !== c),
      { r, c, value: Number(cellVal) },
    ])
    console.log(useStore.getState().emptyCellCount)
  }

  const checkRow = (r: number, c: number, newVal: number) => {
    let filteredConflictedCells = conflictedCells.filter(({ move }) => move.r !== r && move.c !== c)

    board[r].forEach(({ value }, j: number) => {
      if (c !== j && value === newVal) {
        filteredConflictedCells = [
          ...filteredConflictedCells,
          {
            r: r,
            c: j,
            value,
            move: {
              r,
              c,
            },
          },
        ]
      }

      setConflictedCells(filteredConflictedCells)
    })
  }

  return (
    <DeckWrapper>
      {board.map(
        (
          row: { value: number; predefined: boolean }[],
          i: number,
          arr: { value: number; predefined: boolean }[][]
        ) => (
          <DeckRow key={i}>
            {row.map(({ value, predefined }, j: number) => (
              <DeckCell
                key={j}
                borderRight={j < row.length - 1 && (j + 1) % 3 === 0}
                borderBottom={i < arr.length - 1 && (i + 1) % 3 === 0}
              >
                <DeckInput
                  type="text"
                  conflict={conflictedCells.some(({ r, c }) => r === i && c === j)}
                  value={value === 0 ? '' : value}
                  maxLength={1}
                  readOnly={predefined || preview}
                  predefined={predefined}
                  borderRight={j < row.length - 1}
                  borderBottom={i < arr.length - 1}
                  width={cellWidth}
                  height={cellHeight}
                  onFocus={(e) => !predefined && !preview && handleOnFocus(i, j, e.target.value)}
                  onChange={(e) => !predefined && !preview && handleOnChange(i, j, e.target.value)}
                  onBlur={(e) => !predefined && !preview && handleOnBlur(i, j, e.target.value)}
                />
              </DeckCell>
            ))}
          </DeckRow>
        )
      )}
    </DeckWrapper>
  )
}

export default SudokuDeck
