import { NavbarWrapper, Link } from '../theme'

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Link to="/" exact activeClassName="navbar-link-active">
        Main
      </Link>

      <Link to="/select-sudoku" activeClassName="navbar-link-active">
        Select Sudoku
      </Link>

      <Link to="/play" activeClassName="navbar-link-active">
        Play
      </Link>

      <Link to="/history" activeClassName="navbar-link-active">
        History
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar
