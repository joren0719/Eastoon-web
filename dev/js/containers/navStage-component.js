import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import { Button, Navbar, Nav, NavItem ,NavDropdown,MenuItem,Grid,Row,Col   } from 'react-bootstrap';
import NavHoverDrop from './nav-dropdown';
import ItemSearchResult from './item-searchresult';
import ItemSearchAction from './item-searchaction';


class Stage extends Component {

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a
                            href=""
                            onClick={()=>{
                                this.props.selectStage('Home')
                            }}
                        >
                        Eastoon Products
                        </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavHoverDrop eventKey={1} title="Components">
                                    <MenuItem eventKey={1.1} onClick={()=>{
                                        this.props.selectStage('BagClosingMachine')
                                    }}>Bag Closing Machine</MenuItem>
                                    <MenuItem eventKey={1.2} onClick={()=>{
                                        this.props.selectStage('BagClosingParts')
                                    }}>Bag Closing Parts</MenuItem>
                                    <MenuItem eventKey={1.3} onClick={()=>{
                                        this.props.selectStage('IndustrialSewingMachine')
                                    }}>Industrial Sewing Machine</MenuItem>
                                    <MenuItem eventKey={1.4} onClick={()=>{
                                        this.props.selectStage('b')
                                    }}>Industrial Sewing Parts</MenuItem>
                                    <MenuItem eventKey={1.5} onClick={()=>{
                                        this.props.selectStage('c')
                                    }}>Domestic Sewing Machine</MenuItem>
                                    <MenuItem eventKey={1.6} onClick={()=>{
                                        this.props.selectStage('d')
                                    }}>Domestic Sewing Parts</MenuItem>
                                    <MenuItem eventKey={1.7} onClick={()=>{
                                        this.props.selectStage('e')
                                    }}>Knitting Needles</MenuItem>
                                    <MenuItem eventKey={1.8} onClick={()=>{
                                        this.props.selectStage('e')
                                    }}>Sealer Machine</MenuItem>
                                </NavHoverDrop>
                                <NavHoverDrop eventKey={2} title="lalala" >
                                    <MenuItem eventKey={2.1}>Action</MenuItem>
                                </NavHoverDrop>
                          </Nav>
                          <Nav pullRight>
                            <ItemSearchAction />
                          </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

}


function mapStateToProps(state){
    return {
        stage: state.activeStage
    }

}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectStage: actions.selectStage
    }, dispatch)

}

export default connect(mapStateToProps,matchDispatchToProps)(Stage)
