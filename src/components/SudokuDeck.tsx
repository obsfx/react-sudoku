import { DeckWrapper, DeckRow, DeckCell, DeckInput } from '../theme'

const SudokuDeck: React.FC<{
  deck: number[][]
}> = ({ deck }) => {
  return (
    <DeckWrapper>
      {deck.map((row: number[], i: number, arr: number[][]) => (
        <DeckRow>
          {row.map((value: number, j: number) => (
            <DeckCell
              borderRight={j < row.length - 1 && (j + 1) % 3 === 0}
              borderBottom={i < arr.length - 1 && (i + 1) % 3 === 0}
            >
              <DeckInput
                type="text"
                defaultValue={value}
                readOnly={value !== 0}
                predefined={value !== 0}
                borderRight={j < row.length - 1}
                borderBottom={i < arr.length - 1}
              />

              {/*
                   <DeckInput
                   type="text"
                   defaultValue="0"
                   readOnly
                   predefined={(i + 1) % 2 === 0}
                   borderRight={j < row.length - 1}
                   borderBottom={i < arr.length - 1}
                   />
                 */}
            </DeckCell>
          ))}
        </DeckRow>
      ))}
    </DeckWrapper>
  )
}

export default SudokuDeck
