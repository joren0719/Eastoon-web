import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Stage from '../containers/NavStage-component';
import ActiveStage from '../containers/stage-active';
import {actions} from '../actions/index';
import NavHoverDrop from '../containers/nav-dropdown';
import ItemSearchResult from '../containers/item-searchresult';
import ItemSearchAction from '../containers/item-searchaction';
import { Button, Navbar, Nav, NavItem ,NavDropdown,MenuItem,Grid,Row,Col   } from 'react-bootstrap';

require('../../scss/style.scss');


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
        return(
            <div>
                <Stage />
                <ActiveStage />
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
