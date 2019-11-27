import React from 'react';
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App(){
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/results' component={Results} />
        {/* <Route path='/chat' component={Chat} /> */}
      </div>
  </Switch>
    
  );
}

export default App;
