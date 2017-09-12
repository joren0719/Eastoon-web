import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import {Pagination} from 'react-bootstrap';

class Paginationadvanced extends Component {
    render() {
        return (
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={this.props.items}
                maxButtons={5}
                activePage={this.props.activePage}
                onSelect={(key)=>this.props.pageSelect(key)} />
        )

    }


}


function mapStateToProps(state){
    return{
        activePage: state.activePage
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        pageSelect: actions.handleSelect
    }, dispatch)
}


export default connect (mapStateToProps, matchDispatchToProps) (Paginationadvanced)
