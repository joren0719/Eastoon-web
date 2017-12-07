import React from 'react'
import UserDetail from '../containers/user-detail';
import Stage from '../containers/navStage-component';
import ActiveStage from '../containers/stage-active';
import { Button, Navbar, Nav, NavItem ,NavDropdown,MenuItem,Grid,Row,Col,OverlayTrigger,Tooltip  } from 'react-bootstrap';
require('../../scss/style.css');


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
            <div id='wrapper'>
                <div id='header'>
                    <Stage />
                </div>
                <div id='content'>
                    <ActiveStage />
                    <UserDetail />
                </div>
                <div className='footer'>
                        <h4 id='logo'>EASTOON PRODUCTS CO., LTD.</h4>
                        <p>Address:1F., No.15, Ln. 78, Zhongzheng Rd., Xinzhuang Dist., New Taipei City 24243, Taiwan</p>
                        <p>Tel: +886 2 2277 0031</p>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <p><a href="mailto:angel@eastoon.com.tw">Contact Us</a></p>
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
