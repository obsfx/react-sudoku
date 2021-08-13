import { useEffect } from 'react'

import { ContentWrapper, DeckContainer, DeckBlurred, DeckSelectSudokuButton } from '../theme'

import SudokuDeck from '../components/SudokuDeck'
import Time from '../components/Time'

import Decks from '../sudoku-decks'
import useStore from '../store'

/*
 * ui component kullan vakit kaybetme
 * double map ile yeni datayı oluştur input girince
 * checkSquare, CheckRow, CheckCol
 */

const Sudoku: React.FC = () => {
  const board = useStore((state) => state.board)
  const time = useStore((state) => state.time)
  const setTime = useStore((state) => state.setTime)

  useEffect(() => {
    if (board) {
      const interval = setInterval(() => {
        setTime(time + 1)
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'SUDOKU_SAVE',
      JSON.stringify({
        time,
        board,
      })
    )
  }, [time, board])

  return (
    <ContentWrapper>
      <Time time={time} />

      <DeckContainer>
        {!board && (
          <DeckBlurred>
            <DeckSelectSudokuButton to="/select-sudoku">Select Sudoku</DeckSelectSudokuButton>
          </DeckBlurred>
        )}
        <SudokuDeck
          board={board || Decks[0].board}
          preview={!!!board}
          cellWidth="2.4rem"
          cellHeight="2.4rem"
        />
      </DeckContainer>
    </ContentWrapper>
  )
}

export default Sudoku
