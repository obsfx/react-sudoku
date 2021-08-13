import { useEffect } from 'react'

import {
  ContentWrapper,
  DeckContainer,
  DeckBlurred,
  DeckSelectSudokuButton,
  SudokuButtonWrapper,
  SudokuButton,
} from '../theme'

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
  const setCell = useStore((state) => state.setCell)
  const moves = useStore((state) => state.moves)
  const setMoves = useStore((state) => state.setMoves)

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

  const handleUndo = () => {
    const lastMove = moves[moves.length - 1]
    setCell(lastMove.r, lastMove.c, 0)
    setMoves(moves.slice(0, moves.length - 1))
    console.log(useStore.getState().emptyCellCount)
  }

  return (
    <ContentWrapper>
      <Time time={time} />

      <SudokuButtonWrapper>
        <SudokuButton onClick={handleUndo} disabled={moves.length === 0}>
          Undo
        </SudokuButton>
        <SudokuButton>Check</SudokuButton>
      </SudokuButtonWrapper>

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
