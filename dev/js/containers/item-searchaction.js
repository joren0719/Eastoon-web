import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';

class ItemSearchAction extends Component {


    render() {
        return (
            <div id='awayfromtop'>
                <input
                    type="text"
                    onChange={event => this.props.searchHandler(event.target.value)}
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
        searchHandler: actions.searchHandler
    }, dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps) (ItemSearchAction);
