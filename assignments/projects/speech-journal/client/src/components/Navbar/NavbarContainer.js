import React from 'react'
import { withUser } from '../../context/UserProvider'
import { NavLink } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
  } from 'reactstrap'

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, logOut } = this.props
    return (
      <div className="container">
        <Navbar dark expand="md">
          {isAuthenticated && <NavLink to="/journal">Journal</NavLink>}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="px-2">
                {!isAuthenticated ? <NavLink to="/signin">Sign In</NavLink> : <NavLink to="/entryhistory">View Entries</NavLink>}
              </NavItem>
              <NavItem className="px-2">
                {!isAuthenticated ? <NavLink to="/register">Register</NavLink> : <NavLink to="/" onClick={logOut}>Logout</NavLink>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withUser(NavbarContainer)

// import React from 'react'
// import { Link } from "react-router-dom"
// import { withUser } from '../../context/UserProvider'


// const Navbar = (props) => {
//   const { isAuthenticated, logOut } = props
//   return (
//     <div>
//       { !isAuthenticated && <Link to="/">Landing Page</Link>}
//       { !isAuthenticated && <Link to="/signin">Sign In</Link>}
//       { !isAuthenticated && <Link to="/register">Register</Link>}
//       { isAuthenticated && <Link to="/journal">Journal</Link>}
//       { isAuthenticated && <Link to="/entryhistory">View Entries</Link>}
//       { isAuthenticated && <Link to="/" onClick={logOut}>Logout</Link>}
//     </div>
//   )
// }

// export default withUser(Navbar)
