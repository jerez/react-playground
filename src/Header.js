import React,  {Fragment} from 'react';
import { Link, Switch, Route } from 'react-router-dom'

const HeaderContent = () =>
    <Fragment>
        <h1 className="app-title">This is Header</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/first">First</Link>
        </li>
        <li>
            <Link to="/second">Second</Link>
        </li>
        </ul>
    </Fragment>

const Header = () => 
    <header className="app-header">
        <HeaderContent />
        <Switch>
            <Route exact path="/" render={ 
                () => <span>i'm in home</span>
            }/>
            <Route path="/first" render={
                () => <span>i'm in first</span>
            }/>
            <Route path="/second" render={
                () => <span>i'm in second</span>
            }/>
        </Switch>
    </header>

const HeaderWithProps = ({someProp}) => 
    <header className="app-header">
        <HeaderContent />
        {someProp ?
            (<span>I HAVE PROP A</span>) 
            :
            (<span>I DO NOT HAVE PROP A</span>)
        }
    </header>

const ComposedHeader = () =>
<Switch>
  <Route exact path="/" render={()=><HeaderWithProps someProp/>}/>
  <Route path="/first" render={()=><HeaderWithProps someProp/>}/>
  <Route component={HeaderWithProps}/>
</Switch>
    

export default ComposedHeader;  