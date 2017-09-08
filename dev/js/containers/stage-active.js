import { Button, Navbar, Nav, NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import { Col,Row,Grid,Tabs,Tab } from 'react-bootstrap';
import ItemSearchLocalAction from './item-searchlocalaction';

class ActiveStage extends Component {
    render () {
        switch(this.props.activestage){
            case "BagClosingMachine":
                return(
                        <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
                                <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={2} title="Fischbein"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={3} title="GoldenLion"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={4} title="Siruba"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('Siruba')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>

                        </Tabs>

                )
                break;
            case "BagClosingParts":
                return(
                        <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
                                <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={2} title="Fischbein"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={3} title="GoldenLion"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={4} title="Siruba"><ItemSearchLocalAction />
                                    {this.props.BagClosingMachine.filter(filterbyType('Siruba')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>

                        </Tabs>

                )
                break;
            case "IndustrialSewingMachine":
                return(
                        <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
                                <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                    {this.props.Industrial.filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={2} title="Fischbein"><ItemSearchLocalAction />
                                    {this.props.Industrial.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={3} title="GoldenLion"><ItemSearchLocalAction />
                                    {this.props.Industrial.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>
                                <Tab eventKey={4} title="Siruba"><ItemSearchLocalAction />
                                    {this.props.Industrial.filter(filterbyType('Siruba')).filter(searchingFor(this.props.search)).map(components =>
                                    <div
                                        className='center'
                                        key={components.id}
                                        onClick={() => this.props.selectUsers(components)}
                                    >
                                    <Col sm={6} md={2}><Row><img src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                    </div>)}
                                </Tab>

                        </Tabs>

                )
                break;
            }

        return(
            <div>{this.props.activestage}


            </div>
        )
    }



}
function mapStateToProps(state){
    return {
        activestage: state.activeStage,
        BagClosingMachine: state.BagClosingMachine,
        Industrial: state.Industrial,
        search: state.localsearchItem
    }

}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUsers: actions.selectUser
    }, dispatch)

}

function filterbyType (x){
    return(y) => {
        console.log(y);
        if (y.productType==x)
        return y;
    }
}

function searchingFor (term){
    return (state) => {
        return state.productName.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(ActiveStage)
