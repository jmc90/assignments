import React from 'react';
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
   } from 'reactstrap';

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
    return (
      <div >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nasa</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/apod">Picture of The Day</Link>
              </NavItem>
              <NavItem>
                <Link to="/rovergallery">Rover Gallery</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarContainer



// import React from 'react'
// import { Link } from "react-router-dom"

// const NavbarContainer = () => {
//   return (
//     <div className="navbar">
//         <Link to="/">Home</Link>
//         <Link to="/apod">Picture of The Day</Link>
//         <Link to="/rovergallery">Rover Gallery</Link>

//     </div>
//   )
// }

// export default NavbarContainer
