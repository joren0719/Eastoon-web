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
                                <NavItem eventKey={2} onClick={()=>{
                                    this.props.selectStage('About');
                                }}>About</NavItem>
                                <NavHoverDrop eventKey={1} title="Components">
                                    <MenuItem eventKey={1.1} onClick={()=>{
                                        this.props.selectStage('BagClosingMachine');
                                        this.props.pageSelect(1)
                                    }}>Bag Closing Machine</MenuItem>
                                    <MenuItem eventKey={1.2} onClick={()=>{
                                        this.props.selectStage('BagClosingParts');
                                        this.props.pageSelect(1)
                                    }}>Bag Closing Parts</MenuItem>
                                    <MenuItem eventKey={1.3} onClick={()=>{
                                        this.props.selectStage('IndustrialSewingParts');
                                        this.props.pageSelect(1)
                                    }}>Industrial Sewing Parts</MenuItem>
                                    <MenuItem eventKey={1.6} onClick={()=>{
                                        this.props.selectStage('Domestic');
                                        this.props.pageSelect(1)
                                    }}>Domestic</MenuItem>
                                    <MenuItem eventKey={1.7} onClick={()=>{
                                        this.props.selectStage('KnittingNeedles');
                                        this.props.pageSelect(1)
                                    }}>Knitting Needles</MenuItem>
                                    <MenuItem eventKey={1.8} onClick={()=>{
                                        this.props.selectStage('SealerMachine');
                                        this.props.pageSelect(1)
                                    }}>Sealer Machine</MenuItem>
                                    <MenuItem eventKey={1.9} onClick={()=>{
                                        this.props.selectStage('CustomItem');
                                        this.props.pageSelect(1)
                                    }}>Custom Item</MenuItem>
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
        selectStage: actions.selectStage,
        pageSelect: actions.handleSelect
    }, dispatch)

}

export default connect(mapStateToProps,matchDispatchToProps)(Stage)
