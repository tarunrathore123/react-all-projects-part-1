import React from 'react';
import './App.css';
import Header from './header/header'
import { Switch, Route, Redirect } from 'react-router-dom';
import ExpandingCards from './cards/expanding-cards/expanding-cards';

function App() {
  return (
    <div>
      <Header />
        <Switch>
        {/* <Route exact path='/expanding-cards' component={HomePage} /> */}
        <Route exact path='/expanding-cards' component={ExpandingCards} />
          
        </Switch>
    </div>
  );
}

export default App;
