import SudokuDeck from '../components/SudokuDeck'
import {
  ContentWrapper,
  SudokuOptionsContainer,
  SudokuOptionWrapper,
  SudokuPreviewWrapper,
  SudokuStartButton,
} from '../theme'
import Decks from '../sudoku-decks'
import useStore from '../store'

const SelectSudoku: React.FC = () => {
  const reset = useStore((state) => state.reset)
  const setBoard = useStore((state) => state.setBoard)

  const handleStart = (board: { value: number; predefined: boolean }[][]) => {
    reset()
    setBoard(board)
  }

  return (
    <ContentWrapper>
      <SudokuOptionsContainer>
        {Decks.map(({ id, board }) => (
          <SudokuOptionWrapper key={id}>
            <SudokuPreviewWrapper>
              <SudokuDeck board={board} preview cellWidth="1.2rem" cellHeight="1.2rem" />
              <SudokuStartButton to="/play" onClick={() => handleStart(board)}>
                Start
              </SudokuStartButton>
            </SudokuPreviewWrapper>
          </SudokuOptionWrapper>
        ))}
      </SudokuOptionsContainer>
    </ContentWrapper>
  )
}

export default SelectSudoku
