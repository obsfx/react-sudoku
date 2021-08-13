import { ContentWrapper, Card, CardTitle, CardValue, StartPlaying } from '../theme'

const Main: React.FC = () => {
  return (
    <ContentWrapper>
      <Card>
        <CardValue>React Sudoku</CardValue>
        <CardTitle>Yet another sudoku game built using React.</CardTitle>
        <StartPlaying to="/select-sudoku">Start Playing</StartPlaying>
      </Card>
    </ContentWrapper>
  )
}

export default Main
