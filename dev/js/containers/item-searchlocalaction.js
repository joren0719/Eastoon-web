import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';

class ItemSearchLocalAction extends Component {


    render() {
        return (
            <div className='awayfromtop'>
                <input
                    type="text"
                    onChange={event => this.props.searchLocalHandler(event.target.value)}
                    placeholder='Search...'
                />
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
        searchLocalHandler: actions.searchLocalHandler
    }, dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps) (ItemSearchLocalAction);
