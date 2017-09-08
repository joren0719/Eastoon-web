import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index'


class UserList extends Component {


    createListItems() {
        return this.props.users.map((userz) => {

            return (
                <li
                    key={userz.id}
                    onClick={() => this.props.selectUsers(userz)}
                >

                    {userz.model}
                </li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );

    }


}

function mapStateToProps(state) {
    return {
        users: state.userss
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUsers: actions.selectUser             //Key field name is called by components
                                             //Value field name is imported from other file
    }, dispatch)

}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);
