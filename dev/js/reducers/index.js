import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import SearchItemReducer from './reducer-searching';
import SearchLocalItemReducer from './reducer-localsearching';
import ActiveNavDropDown from './reducer-activeNavD';
import ActiveStage from './reducer-activeStage';
import BagClosingMachine from './reducer-BagClosingMachine';
import BagClosingParts from './reducer-BagClosingParts';
import Industrial from './reducer-Industrial';

const allReducers = combineReducers({
    userss: UserReducers,
    activeUser: ActiveUserReducer,
    searchItem: SearchItemReducer,
    localsearchItem: SearchLocalItemReducer,
    activeNavD: ActiveNavDropDown,
    activeStage: ActiveStage,
    BagClosingMachine: BagClosingMachine,
    BagClosingParts: BagClosingParts,
    Industrial: Industrial

});
export default allReducers;
