import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Logout from './pages/Logout';
import ServiceLogin from './pages/ServiceLogin';
import Register from './pages/Register';
import RegisterInfo from './pages/RegisterInfo';
import Gmail from './pages/Gmail';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/ServiceLogin" component={ServiceLogin} />
                <Route path="/register" component={Register} />
                <Route path="/registerinfo" component={RegisterInfo} />
                <Route path="/gmail" component={Gmail} />
            </Switch>        
        </BrowserRouter>
    )
}