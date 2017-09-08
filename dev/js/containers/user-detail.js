import React, {Component} from 'react';
import {connect} from 'react-redux';



class UserDetail extends Component {

    render() {
        if(!this.props.user){
            return(<h4>Select a user...</h4>)
        }

        return (
            <div>
                <h1>{this.props.search}</h1>
                <img src={this.props.user.piclocation}/>
                <h2>{this.props.user.productType} {this.props.user.productName}</h2>
                <h3>catagory: {this.props.user.catagory}</h3>
                <h3>description: {this.props.user.description}</h3>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
        search: state.searchUser
    };

}

export default connect(mapStateToProps)(UserDetail);
