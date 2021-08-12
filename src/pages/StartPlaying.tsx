import SudokuDeck from '../components/SudokuDeck'
import { ContentWrapper, DeckContainer } from '../theme'
import Decks from '../sudoku-decks'

const StartPlaying: React.FC = () => {
  return (
    <ContentWrapper>
      <DeckContainer>
        <SudokuDeck deck={Decks.decks[0].board} />
      </DeckContainer>
    </ContentWrapper>
  )
}

export default StartPlaying
