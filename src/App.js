import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Main from './Pages/Main.jsx';
import Host from './Pages/Host.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/Main' component={Main} />
        <Route path='/Host' component={Host} />
      </Switch>
    </div>
  );
}

export default App;

