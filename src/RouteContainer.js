import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Main, First, Second } from './Scenes';

const RouteContainer = () => 
<main className="app-main">
    <h2>this is the main section</h2>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/first" component={First}/>
        <Route path="/second" component={Second}/>
    </Switch>
</main> 


export default RouteContainer;

