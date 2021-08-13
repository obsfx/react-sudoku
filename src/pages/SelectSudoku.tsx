import SudokuDeck from '../components/SudokuDeck'
import {
  ContentWrapper,
  SudokuOptionsContainer,
  SudokuOptionWrapper,
  SudokuPreviewWrapper,
  SudokuStartButton,
} from '../theme'
import Decks from '../sudoku-decks'

const SelectSudoku: React.FC = () => {
  return (
    <ContentWrapper>
      <SudokuOptionsContainer>
        {Decks.data.map(({ id, board }) => (
          <SudokuOptionWrapper key={id}>
            <SudokuPreviewWrapper>
              <SudokuDeck deck={board} preview cellWidth="1.2rem" cellHeight="1.2rem" />
              <SudokuStartButton>Start</SudokuStartButton>
            </SudokuPreviewWrapper>
          </SudokuOptionWrapper>
        ))}
      </SudokuOptionsContainer>
    </ContentWrapper>
  )
}

export default SelectSudoku
