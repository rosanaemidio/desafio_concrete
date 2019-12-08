import React from 'react';
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App(){
  return (

    <Switch>
      <div>
        <Route exact={true} path='/' component={Home} />
        <Route path='/results' component={Results} />
      </div>
  </Switch>
    
  );
}

export default App;
