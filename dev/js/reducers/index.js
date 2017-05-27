import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

console.log('1');
const allReducers = combineReducers({
    users: UserReducers,
    activeUser: ActiveUserReducer
});
console.log('2');

export default allReducers;
