import { DeckWrapper, DeckRow, DeckCell, DeckInput } from '../theme'
import useStore from '../store'

const SudokuDeck: React.FC<{
  board: { value: number; predefined: boolean }[][]
  preview: boolean
  cellWidth: string
  cellHeight: string
}> = ({ board, preview, cellWidth, cellHeight }) => {
  const setCell = useStore((state) => state.setCell)
  const moves = useStore((state) => state.moves)
  const setMoves = useStore((state) => state.setMoves)

  const handleOnChange = (r: number, c: number, value: string) => {
    if (/^[1-9]+$/.test(value)) {
      setCell(r, c, Number(value))
    }
  }

  const handleOnBlur = (r: number, c: number, value: string) => {
    setMoves([...moves, { r, c, value: Number(value) }])
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
                  value={value === 0 ? '' : value}
                  maxLength={1}
                  readOnly={predefined || preview}
                  predefined={predefined}
                  borderRight={j < row.length - 1}
                  borderBottom={i < arr.length - 1}
                  width={cellWidth}
                  height={cellHeight}
                  onChange={(e) => value === 0 && !preview && handleOnChange(i, j, e.target.value)}
                  onBlur={(e) => handleOnBlur(i, j, e.target.value)}
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
