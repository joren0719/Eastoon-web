import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../actions/index'
import { Button, Navbar, Nav, NavItem ,NavDropdown,MenuItem,Grid,Row,Col,Modal,Tooltip,Popover} from 'react-bootstrap';



class UserDetail extends Component {


    constructor(props) {
        super(props)
        this.state = { showModal:false }
      }

      close () {
        return this.setState({ showModal: false })
      }

      open () {
        return this.setState({ showModal: true })
      }

      render() {

        return (
                <Modal dialogClassName='wide' show={this.props.Modal} onHide={() =>this.props.closeModal()}>
                  <Modal.Header closeButton>
                    <Modal.Title>{this.props.user.productName}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div className="center">
                          <h1>{this.props.search}</h1>
                          <img className="detail" src={this.props.user.piclocation}/>
                          <h2>{this.props.user.productType} {this.props.user.productName}</h2>
                          <h3>catagory: {this.props.user.catagory}</h3>
                          <h3>description: {this.props.user.description}</h3>
                      </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() =>this.props.closeModal()}>Close</Button>
                  </Modal.Footer>
                </Modal>
        );
      }






}
//
// render() {
//     if(!this.props.user){
//         return(<div></div>)
//     }
//
//     return (
//         <Popover id="popover-trigger-hover-focus" title={this.props.user.productName}>
//               <div>
//                   <h1>{this.props.search}</h1>
//                   <img src={this.props.user.piclocation}/>
//                   <h2>{this.props.user.productType} {this.props.user.productName}</h2>
//                   <h3>catagory: {this.props.user.catagory}</h3>
//                   <h3>description: {this.props.user.description}</h3>
//               </div>
//         </Popover>
//     )
// }


function mapStateToProps(state) {
    return {
        Modal: state.Modal,
        user: state.activeUser,
        search: state.searchUser
    };

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        closeModal: actions.closeModal,
        openModal: actions.openModal
    }, dispatch)

}

export default connect(mapStateToProps,matchDispatchToProps)(UserDetail);
