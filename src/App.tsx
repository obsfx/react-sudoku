import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Main from './pages/Main'
import SelectSudoku from './pages/SelectSudoku'
import Sudoku from './pages/Sudoku'
import GameHistory from './pages/GameHistory'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/history">
          <GameHistory />
        </Route>
        <Route path="/play">
          <Sudoku />
        </Route>
        <Route path="/select-sudoku">
          <SelectSudoku />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
