import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import allReducers from './reducers';
import Home from './components/home';
import App from './components/app';
//import About from './components/about';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';
// import allReducers from './reducers';
// import App from './components/App';


const store = createStore(allReducers);

// const logger = createLogger();
// const store = createStore(
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );
//
// <Router>
//     <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/components" component={App} />
//     </Switch>
// </Router>

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root')
);
