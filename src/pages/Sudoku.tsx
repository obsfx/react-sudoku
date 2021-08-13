import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
import Modal from '../components/Modal'

import Decks from '../sudoku-decks'
import useStore from '../store'

const Sudoku: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [completed, setCompleted] = useState(false)

  const reset = useStore((state) => state.reset)
  const board = useStore((state) => state.board)
  const time = useStore((state) => state.time)
  const setTime = useStore((state) => state.setTime)
  const setCell = useStore((state) => state.setCell)
  const moves = useStore((state) => state.moves)
  const setMoves = useStore((state) => state.setMoves)
  const emptyCellCount = useStore((state) => state.emptyCellCount)
  const conflictedCells = useStore((state) => state.conflictedCells)
  const setConflictedCells = useStore((state) => state.setConflictedCells)

  const history = useHistory()

  useEffect(() => {
    if (board.length > 0 && !completed) {
      const interval = setInterval(() => {
        setTime(time + 1)
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  })

  useEffect(() => {
    if (board.length > 0) {
      localStorage.setItem(
        'SUDOKU_SAVE',
        JSON.stringify({
          time,
          board,
          moves,
          emptyCellCount,
          conflictedCells,
        })
      )
    }
  }, [time, board, moves, emptyCellCount, conflictedCells])

  const handleUndo = () => {
    const lastMove = moves[moves.length - 1]
    setCell(lastMove.r, lastMove.c, 0)
    setMoves(moves.slice(0, moves.length - 1))
    setConflictedCells(
      conflictedCells.filter(({ move }) => move.r !== lastMove.r && move.c !== lastMove.c)
    )
  }

  const handleCheck = () => {
    if (board.length === 0) {
      return
    }

    if (emptyCellCount === 0 && conflictedCells.length === 0) {
      setCompleted(true)
      setModalContent('You have solved this sudoku.')
      setShowModal(true)

      const historyStorage = localStorage.getItem('SUDOKU_HISTORY')

      const historyArr = historyStorage ? JSON.parse(historyStorage) : []

      localStorage.removeItem('SUDOKU_SAVE')

      localStorage.setItem(
        'SUDOKU_HISTORY',
        JSON.stringify({
          data: [
            ...historyArr,
            {
              time,
              id: Date.now(),
            },
          ],
        })
      )
    } else if (conflictedCells.length > 0) {
      setModalContent('You have to solve the conflicts to complete this sudoku.')
      setShowModal(true)
    } else if (emptyCellCount > 0) {
      setModalContent('You have to fill all cells.')
      setShowModal(true)
    }
  }

  return (
    <ContentWrapper>
      <Time time={time} />
      <Modal
        show={showModal}
        fail={!completed}
        success={completed}
        content={modalContent}
        onClose={() => {
          setShowModal(false)
          if (completed) {
            history.push('/history')
            reset()
          }
        }}
      />

      <SudokuButtonWrapper>
        <SudokuButton onClick={handleUndo} disabled={moves.length === 0}>
          Undo
        </SudokuButton>
        <SudokuButton onClick={handleCheck}>Check</SudokuButton>
      </SudokuButtonWrapper>

      <DeckContainer>
        {board.length === 0 && (
          <DeckBlurred>
            <DeckSelectSudokuButton to="/select-sudoku">Select Sudoku</DeckSelectSudokuButton>
          </DeckBlurred>
        )}
        <SudokuDeck
          board={board.length > 0 ? board : Decks[0].board}
          preview={board.length === 0}
          cellWidth="2.4rem"
          cellHeight="2.4rem"
        />
      </DeckContainer>
    </ContentWrapper>
  )
}

export default Sudoku
