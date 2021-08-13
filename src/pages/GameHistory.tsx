import { useState, useEffect } from 'react'
import { ContentWrapper, HistoryContainer, DescText, Card, CardTitle, CardValue } from '../theme'

const GameHistory: React.FC = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const history = localStorage.getItem('SUDOKU_HISTORY')
    if (history) {
      setHistory(JSON.parse(history))
    }
  }, [])

  return (
    <ContentWrapper>
      <HistoryContainer>
        {history.length > 0 ? (
          history.map(({ id, time }) => (
            <Card key={id}>
              <CardTitle>Game ID: {id}</CardTitle>
              <CardValue>
                Completion Time: {Math.floor(time / 60)}:
                {time % 60 < 10 ? `0${time % 60}` : time % 60}
              </CardValue>
            </Card>
          ))
        ) : (
          <DescText>You have not completed any game yet.</DescText>
        )}
      </HistoryContainer>
    </ContentWrapper>
  )
}

export default GameHistory
