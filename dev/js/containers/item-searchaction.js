import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import { form, FormGroup,FormControl   } from 'react-bootstrap';


// <input
//     type="text"
//     onChange={event => this.props.searchHandler(event.target.value)}
//     placeholder='Find a Machine/Component...'
//     id={this.props.ind}
// />

class ItemSearchAction extends Component {


    render() {
        return (
            <div id='awayfromtop'>
                <form>
                    <FormGroup>
                        <FormControl
                            type="text"
                            onChange={event => this.props.searchHandler(event.target.value)}
                            placeholder='Find a Machine/Component...'
                            id={this.props.ind}
                         />
                    </FormGroup>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        searchHandler: actions.searchHandler
    }, dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps) (ItemSearchAction);
