import { Button, Navbar, Nav, NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import { Col,Row,Grid,Tabs,Tab } from 'react-bootstrap';
import ItemSearchLocalAction from './item-searchlocalaction';
import NavHoverDrop from './nav-dropdown';
import Paginationadvanced from './paginationadvanced'

class ActiveStage extends Component {
    render () {


        var pagenum = this.props.activePage;
        var activeContentStart = (pagenum-1)*48; //slice end not included
        var activeContentEnd = (pagenum)*48;



    if(this.props.globalsearch==''){
            switch(this.props.activestage){
                case "Home":
                    return(<div>Home!!!!</div>)
                    break;
                case "About":
                    return(<div>Eastoon Products</div>)
                    break;
                case "BagClosingMachine":
                    return(
                            <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example" onClick={() => this.props.pageSelect(1)}>
                                    <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.BagClosingMachine.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.BagClosingMachine.filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Fischbein"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.BagClosingMachine.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.BagClosingMachine.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={3} title="GoldenLion"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.BagClosingMachine.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.BagClosingMachine.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={4} title="Siruba"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.BagClosingMachine.filter(filterbyType('Siruba')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.BagClosingMachine.filter(filterbyType('GoldenLion')).filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>

                            </Tabs>

                    )
                    break;
                case "BagClosingParts":
                    return(
                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" onClick={() => this.props.pageSelect(1)}>
                          <Row className="clearfix">
                            <Col md={12}>
                              <Nav bsStyle="tabs">
                                <NavItem eventKey={'first'}>
                                  All
                                </NavItem>
                                <NavDropdown eventKey="2" title="Fischbein">
                                    <MenuItem eventKey="2.1">Accessories</MenuItem>
                                    <MenuItem eventKey="2.2">Model_100_200</MenuItem>
                                    <MenuItem eventKey="2.3">Model_D_E_F</MenuItem>
                                    <MenuItem eventKey="2.4">Other</MenuItem>
                                </NavDropdown>

                                <NavItem eventKey={'3'}>
                                  NLI&NEWLONG
                                </NavItem>
                                <NavItem eventKey={'4'}>
                                  UnionSpecial
                                </NavItem>
                                <NavItem eventKey={'5'}>
                                  Other
                                </NavItem>

                              </Nav>
                            </Col>
                            <Col md={12}>
                              <Tab.Content animation>
                                <Tab.Pane eventKey='first'><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="2.1"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('Fischbein-Accessories')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('Fischbein-Accessories')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.2"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('Fischbein-Model_100_200')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('Fischbein-Model_100_200')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.3"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('Fischbein-Model_D_E_F')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('Fischbein-Model_D_E_F')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.4"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('Fischbein')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('NLI&NEWLONG')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('NLI&NEWLONG')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('UnionSpecial')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('UnionSpecial')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.BagClosingParts.filter(filterbyType('Other')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.BagClosingParts.filter(filterbyType('Other')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>

                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                    )
                    break;
                case "IndustrialSewingParts":
                    return(
                            <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example" onClick={() => this.props.pageSelect(1)}>
                                    <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.Industrial.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.Industrial.filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="BagClosing" ><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.Industrial.filter(filterbyType('Part-BagClosingPart')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.Industrial.filter(filterbyType('Part-BagClosingPart')).filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={3} title="Sewing" ><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.Industrial.filter(filterbyType('Part-SewingPart-Hookbobbin')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.Industrial.filter(filterbyType('Part-SewingPart-Hookbobbin')).filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>

                            </Tabs>

                    )
                    break;

                case "Domestic":
                    return(
                        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" onClick={() => this.props.pageSelect(1)}>
                          <Row className="clearfix">
                            <Col md={12}>
                              <Nav bsStyle="tabs">
                                <NavItem eventKey={'first'}>
                                  All
                                </NavItem>
                                <NavDropdown eventKey="2" title="Parts">
                                    <MenuItem eventKey="2.1">Accessories</MenuItem>
                                    <MenuItem eventKey="2.2">BELTS</MenuItem>
                                    <MenuItem eventKey="2.3">Bobbin</MenuItem>
                                    <MenuItem eventKey="2.4">CuttingMat</MenuItem>
                                    <MenuItem eventKey="2.5">Other</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={'third'}>
                                  Machine
                                </NavItem>

                              </Nav>
                            </Col>
                            <Col md={12}>
                              <Tab.Content animation>
                                <Tab.Pane eventKey='first'><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.1"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Part-Accessories')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Part-Accessories')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.2"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Part-BELTS')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Part-BELTS')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.3"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Part-Bobbin')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Part-Bobbin')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.4"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Part-CuttingMat')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Part-CuttingMat')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2.5"><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Part')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Part')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'><ItemSearchLocalAction />
                                    <div>
                                        <Row>
                                            {this.props.Domestic.filter(filterbyType('Machine-SINGER')).filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                            <div
                                                className='center'
                                                key={components.id}
                                                onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                            >
                                            <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                            </div>)}
                                        </Row>
                                        <Row className='center'>
                                            <Paginationadvanced items={Math.ceil((this.props.Domestic.filter(filterbyType('Machine-SINGER')).filter(searchingFor(this.props.search)).length)/48)} />
                                        </Row>
                                    </div>
                                </Tab.Pane>

                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>

                    )
                    break;
                case "KnittingNeedles":
                    return(
                            <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example" onClick={() => this.props.pageSelect(1)}>
                                    <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.KnittingNeedles.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.KnittingNeedles.filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                            </Tabs>

                    )
                    break;
                case "SealerMachine":
                    return(
                            <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example" onClick={() => this.props.pageSelect(1)}>
                                    <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.SealerMachine.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.SealerMachine.filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>
                            </Tabs>

                    )
                    break;
                case "CustomItem":
                    return(
                            <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example" onClick={() => this.props.pageSelect(1)}>
                                    <Tab eventKey={1} title="All"><ItemSearchLocalAction />
                                        <div>
                                            <Row>
                                                {this.props.CustomItem.filter(searchingFor(this.props.search)).slice(activeContentStart,activeContentEnd).map(components =>
                                                <div
                                                    className='center'
                                                    key={components.id}
                                                    onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                                                >
                                                <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                                                </div>)}
                                            </Row>
                                            <Row className='center'>
                                                <Paginationadvanced items={Math.ceil((this.props.CustomItem.filter(searchingFor(this.props.search)).length)/48)} />
                                            </Row>
                                        </div>
                                    </Tab>


                            </Tabs>

                    )
                    break;
                }



    }
    else {
        return (
            <div>
                <Row>
                    {this.props.globaldata.filter(searchingFor(this.props.globalsearch)).slice(activeContentStart,activeContentEnd).map(components =>
                    <div
                        className='center'
                        key={components.id}
                        onClick={() => {this.props.selectUsers(components);this.props.openModal()}}
                    >
                    <Col sm={6} md={2}><Row><img className="thumb" src={components.thumbnail}/></Row><Row>{components.productName}</Row></Col>
                    </div>)}
                </Row>
                <Row className='center'>
                    <Paginationadvanced items={Math.ceil((this.props.globaldata.filter(searchingFor(this.props.globalsearch)).length)/48)} />
                </Row>
            </div>
        )

    }
    }
}



function mapStateToProps(state){
    return {
        activestage: state.activeStage,
        activePage: state.activePage,
        BagClosingMachine: state.BagClosingMachine,
        BagClosingParts: state.BagClosingParts,
        Industrial: state.Industrial,
        Domestic: state.Domestic,
        KnittingNeedles: state.KnittingNeedles,
        SealerMachine: state.SealerMachine,
        CustomItem: state.CustomItem,
        search: state.localsearchItem,
        globalsearch: state.searchItem,
        globaldata: state.userss
    }

}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUsers: actions.selectUser,
        openModal: actions.openModal,
        pageSelect: actions.handleSelect
    }, dispatch)

}

function filterbyType (x){
    return(y) => {
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
