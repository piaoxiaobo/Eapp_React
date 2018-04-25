/**
 * Created by Bianrongcheng on 2018
 */
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';

import Main from './containers/main/main';

ReactDOM.render((
        <HashRouter>
            <Switch>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
), document.getElementById('root'));

