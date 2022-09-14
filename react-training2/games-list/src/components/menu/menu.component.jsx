import React from "react";
import { MenuItems } from "./menuitems.component";
import {connect} from 'react-redux';
// import './menu.styles.scss';
// import {Button} from '../button/button';
import {Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = ({history}) => {
    return (
      <Navbar bg="light" expand="lg">
        <Link to={ `/`} > 
        <Navbar.Brand >Jobs</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            
            
            <button onClick={() => history.push('/visited')}>Visited Jobs</button>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }


const mapStateToProps = state =>({
  currentUser: state.user.currentUser
});

export default withRouter(connect(mapStateToProps)(Menu));
