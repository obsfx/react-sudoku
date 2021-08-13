import { DeckWrapper, DeckRow, DeckCell, DeckInput } from '../theme'

const SudokuDeck: React.FC<{
  board: number[][]
  preview: boolean
  cellWidth: string
  cellHeight: string
}> = ({ board, preview, cellWidth, cellHeight }) => {
  return (
    <DeckWrapper>
      {board.map((row: number[], i: number, arr: number[][]) => (
        <DeckRow key={i}>
          {row.map((value: number, j: number) => (
            <DeckCell
              key={j}
              borderRight={j < row.length - 1 && (j + 1) % 3 === 0}
              borderBottom={i < arr.length - 1 && (i + 1) % 3 === 0}
            >
              <DeckInput
                type="text"
                defaultValue={value === 0 ? '' : value}
                maxLength={1}
                readOnly={value !== 0 || preview}
                predefined={value !== 0}
                borderRight={j < row.length - 1}
                borderBottom={i < arr.length - 1}
                width={cellWidth}
                height={cellHeight}
              />
            </DeckCell>
          ))}
        </DeckRow>
      ))}
    </DeckWrapper>
  )
}

export default SudokuDeck
