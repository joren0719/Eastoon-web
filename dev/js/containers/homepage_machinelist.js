import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import {Col,Row,Grid } from 'react-bootstrap';

require('../../scss/style.css');


class HomepageMachinelist extends Component {

    render() {

        return (

            <div>
                <h1 id='headline'>We have...</h1>
                <br />
                <Row id='listitem'>
                    <Col sm={6} md={3}>
                        <div className='patch'>
                            <div
                                className='patch-content'
                                onClick={()=>{this.props.selectMachine(this.props.BagClosingMachine.find(m=>m.productName==='GL-F'))}}>
                                <Row>Golden Lion GL-F</Row>
                                <Row><img className='display'  src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/Thumbnail/GL-F(s).jpg"/></Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='patch'>
                            <div
                                className='patch-content'
                                onClick={()=>{this.props.selectMachine(this.props.BagClosingMachine.find(m=>m.productName==='AA-6'))}}>
                                <Row>SiRUBA AA-6</Row>
                                <Row><img className='display'  src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/Thumbnail/AA-6(s).jpg"/></Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='patch'>
                            <div
                                className='patch-content'
                                onClick={()=>{this.props.selectMachine(this.props.SealerMachine.find(m=>m.productName==='02.Hand_Sealers_with_Cutter'))}}>
                                <Row>Hand Sealer with Cutter</Row>
                                <Row><img className='display'  src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/zHome/Hand_Sealer_with_Cutter-full.jpg"/></Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='patch'>
                            <div
                                className='patch-content'
                                onClick={()=>{this.props.selectMachine(this.props.BagClosingMachine.find(m=>m.productName==='SINGER 143'))}}>
                                <Row>Singer143</Row>
                                <Row><img className='display'  src="https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/zHome/SINGER143.jpg"/></Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )

    }

}

function mapStateToProps(state) {
    return {
        BagClosingMachine: state.BagClosingMachine,
        SealerMachine: state.SealerMachine
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectMachine: actions.selectMachine
    }, dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps)(HomepageMachinelist);
