import { Button, Navbar, Nav, NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index'


class NavHoverDrop extends Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  handleOpen () {
    return this.setState({ isOpen: true })
  }

  handleClose () {
     return this.setState({ isOpen: false })
  }


  render() {
      return (
         <Nav>
          <NavDropdown
            eventKey={this.props.eventKey}
            onMouseEnter = {() => this.handleOpen() }
            onMouseLeave = {() => this.handleClose() }
            open = {this.state.isOpen}
            onToggle= {() => this.props.isOpen()}//here takes a function that can do something, not necessarily need to open
            title={this.props.title}
            id='nav'
          >
            {this.props.children}
          </NavDropdown>
        </Nav>
      )

  }
}

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        isOpen: actions.isOpen  //Key field name is called by components
                                             //Value field name is imported from other file
    }, dispatch)

}




export default connect(mapStateToProps,matchDispatchToProps)(NavHoverDrop);
