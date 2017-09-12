import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Stage from '../containers/navStage-component';
import ActiveStage from '../containers/stage-active';
import {actions} from '../actions/index';
import NavHoverDrop from '../containers/nav-dropdown';
import ItemSearchResult from '../containers/item-searchresult';
import ItemSearchAction from '../containers/item-searchaction';
import { Button, Navbar, Nav, NavItem ,NavDropdown,MenuItem,Grid,Row,Col,OverlayTrigger,Tooltip  } from 'react-bootstrap';
//require('../../scss/style.css');


//this app function prints some html surrended by <h2>, then calls the 'UserList' component.
/*
const App = () => (
    <div>
        <h2>UserName List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
    </div>
);

export default App;
*/




function App () {

        const tooltip =  (
            <Tooltip id="tooltip" className='center'>Address:1F., No.15, Ln. 78, Zhongzheng Rd., Xinzhuang Dist., New Taipei City 24243, Taiwan<br /> Tel: +886 2 2277 0031 <br /> Fax: +886 2 3322 9648 <br /> Email: angel@eastoon.com.tw </Tooltip>
        )


        return(
            <div>
                <div>
                    <Stage />
                </div>
                <div className='content'>
                    <ActiveStage />
                    <UserDetail />
                </div>
                <div className='footer'>
                    <OverlayTrigger placement="top" overlay={tooltip}>
                        <h4>EASTOON PRODUCTS CO., LTD.</h4>
                    </OverlayTrigger>
                </div>
            </div>
        )



}


// <div>
//     <Grid>
//     <Row className="show-grid">
//          <h2>Component list:</h2>
//          <ItemSearchResult />
//     </Row>
//     </Grid>
//     <hr/>
//     <Grid>
//     <Row className="show-grid">
//         <h2>Component Details:</h2>
//         <UserDetail />
//     </Row>
//     </Grid>
//
// </div>



//<NavItem eventKey={2} href="#">Link Right</NavItem>
export default App;
