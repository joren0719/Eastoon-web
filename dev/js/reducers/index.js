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
import Domestic from './reducer-Domestic';
import KnittingNeedles from './reducer-KnittingNeedles';
import SealerMachine from './reducer-SealerMachine';
import CustomItem from './reducer-CustomItem';
import Modal from './reducer-modal';
import activePage from './reducer-activePage'

const allReducers = combineReducers({
    activeUser: ActiveUserReducer,
    searchItem: SearchItemReducer,
    localsearchItem: SearchLocalItemReducer,
    activeNavD: ActiveNavDropDown,
    activeStage: ActiveStage,
    BagClosingMachine: BagClosingMachine,
    BagClosingParts: BagClosingParts,
    Industrial: Industrial,
    Domestic: Domestic,
    KnittingNeedles: KnittingNeedles,
    SealerMachine: SealerMachine,
    CustomItem: CustomItem,
    Modal: Modal,
    activePage: activePage,
    userss: UserReducers
});
export default allReducers;
