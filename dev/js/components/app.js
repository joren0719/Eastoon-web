import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require('../../scss/style.scss');


//this app function prints some html surrended by <h2>, then calls the 'UserList' component.
const App = () => (
    <div>
        <h2>UserName List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
    </div>
);

export default App;
