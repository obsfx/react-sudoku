import { ContentWrapper } from '../theme'

import SudokuDeck from '../components/SudokuDeck'
import { DeckContainer } from '../theme'
import Decks from '../sudoku-decks'

const Sudoku: React.FC = () => {
  return (
    <ContentWrapper>
      <DeckContainer>
        <SudokuDeck deck={Decks.data[0].board} preview={false} cellWidth="3rem" cellHeight="3rem" />
      </DeckContainer>
    </ContentWrapper>
  )
}

export default Sudoku
