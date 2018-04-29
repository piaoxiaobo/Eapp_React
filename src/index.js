/**
 * Created by Bianrongcheng on 2018
 */
import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';

import Main from './containers/main/main';

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route component={Main}/>
            </Switch>
        </BrowserRouter>
), document.getElementById('root'));

