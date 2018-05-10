import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import {Main, First, Second, Child, GrandChild } from './Scenes';

const RouteContainer = () => 
<main className="app-main">
    <h2>this is the main section</h2>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/first" component={First}/>
        <Route path="/second" component={Second}/>
    </Switch>
</main> 


// const RouteContainerConfig = ({ route }) => 
// <main className="app-main">
//     <h2>this is the main section with Config</h2>
//     {/* child routes won't render without this */}
//     {renderRoutes(routes)}
// </main> 

// const routes = [
//     { component: RouteContainerConfig,
//       routes: [
//         { path: '/',
//           exact: true,
//           component: Main
//         },
//         { path: '/first',
//           exact: true,
//           component: First
//         },
//         { path: '/second',
//           exact: true,
//           component: Main
//         },
//         { path: '/child/:id',
//           component: Child,
//           routes: [
//             { path: '/child/:id/grand-child',
//               component: GrandChild
//             }
//           ]
//         }
//       ]
//     }
//   ]

export default RouteContainer;

