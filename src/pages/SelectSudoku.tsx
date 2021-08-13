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
  const setTime = useStore((state) => state.setTime)
  const setBoard = useStore((state) => state.setBoard)

  const handleStart = (board: { value: number; predefined: boolean }[][]) => {
    setTime(0)
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
