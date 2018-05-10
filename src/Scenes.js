import React from 'react';
import { renderRoutes } from 'react-router-config'

export const SceneContainer = (component) => <div><component/></div>;

export const Main = () => <h3>Main</h3>
export const First = () => <h3>First</h3>
export const Second = () => <h3>Second</h3>

export const Child = ({ route }) => (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
    </div>
  )
  
export const GrandChild = ({ someProp }) => (
    <div>
        <h3>Grand Child</h3>
        <div>{someProp}</div>
    </div>
)