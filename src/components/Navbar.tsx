import { NavbarWrapper, Link } from '../theme'

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Link to="/" exact activeClassName="navbar-link-active">
        Home
      </Link>

      <Link to="/start-playing" activeClassName="navbar-link-active">
        Start Playing
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar
