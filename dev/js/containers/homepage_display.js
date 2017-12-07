import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { Player,ControlBar  } from 'video-react';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import {Col,Row,Grid } from 'react-bootstrap';

require('../../scss/style.css');


class Homepagedisplay extends Component {


    render(){
        if (this.props.homepagedisplay==null){
            return(<div></div>)
        }else if (typeof this.props.homepagedisplay.description==='string'){
            console.log();

            return(
                    <div className='hidden-display-panel'>
                        <div className='hidden_display_panel_header'>
                            <h1>{this.props.homepagedisplay.productName}</h1>
                        </div>
                        <Row className='hidden_display_panel_body'>
                            <Col sm={6} md={6} className='hidden-display-panel-picture'>
                                <img className="home_img" src={this.props.homepagedisplay.piclocation}/>
                            </Col>
                            <Col sm={6} md={6} className='hidden-display-panel-texts'>
                                <h4>{this.props.homepagedisplay.descriptionHead}</h4>
                                <p>{this.props.homepagedisplay.description}</p>

                            </Col>
                        </Row>
                    <div className='vid'>
                         <Player
                            poster={this.props.homepagedisplay.piclocation}
                            src={this.props.homepagedisplay.video}
                          />
                    </div>
                    </div>
            )

        }else {
            return (
                <div className='hidden-display-panel'>
                    <div className='hidden_display_panel_header'>
                        <h1>{this.props.homepagedisplay.productName}</h1>
                    </div>
                    <Row className='hidden_display_panel_body'>
                        <Col sm={6} md={6} className='hidden-display-panel-picture'>
                            <img className="home_img" src={this.props.homepagedisplay.piclocation}/>
                        </Col>
                        <Col sm={6} md={6} className='hidden-display-panel-texts'>
                            <h4>{this.props.homepagedisplay.descriptionHead}</h4>
                            {this.props.homepagedisplay.description.map((element,i)=>
                                <p key={i}>{element}</p>
                            )}
                        </Col>
                    </Row>
                    <div className='vid'>
                         <Player
                             poster={this.props.homepagedisplay.piclocation}
                             src={this.props.homepagedisplay.video}
                          />
                    </div>
                </div>
            )
        }


    }


}


function mapStateToProps(state) {
    return {
        homepagedisplay: state.homepagedisplay
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectMachine: actions.selectMachine
    }, dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps)(Homepagedisplay);

// MODEL : GL-F
//
// HIGH- SPEED TYPE WITH PLASTIC HANDLE & LUBRICATOR
//
// SingleThread Chain Stitch
//
// Features:
//
// *High Speed Type With Plastic Handle & Lubricator
//
// *Automatic thread cutting
//
// *Oil pump lubrication system
//
// *Trouble-free continuous operation
//
// *For craft paper, cotton, hessian, jute, pp/pe woven cloth and other bag materials
//
// OPTIONAL USAGE:
//
// *Spring Balancer with Hanger
//
// *Tape Binding Attachment
//
// *Shoulder Belt
//
// *Presser foot lifter
//
// *Thread cone cover
