import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from '../actions/index';
import { Col,Row,Grid  } from 'react-bootstrap';


class ItemSearchResult extends Component {

    render() {
            console.log(this.props.users);

        if(this.props.search==''){
            return(<h4>Search...</h4>)
        }


        return (
            <div>
                {this.props.users.filter(searchingFor(this.props.search)).map(result =>
                    <div
                        className='center'
                        key={result.id}
                        onClick={() => this.props.selectUsers(result)}
                    >

                    <Col sm={6} md={2}><Row><img src={result.thumbnail}/></Row><Row>{result.productName}</Row></Col>

                    </div>
                )}
            </div>
        );
    }



}

function mapStateToProps(state){
    return {
        users: state.userss,
        search: state.searchItem
    }

}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUsers: actions.selectUser
    }, dispatch)

}

function searchingFor (term){
    return (state) => {
        return state.productName.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
    }
}


export default connect(mapStateToProps,matchDispatchToProps) (ItemSearchResult);
