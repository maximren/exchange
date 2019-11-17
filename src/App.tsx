import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import LatestRateComponent from './components/LatestRateComponent';
import ExchangeComponents from './components/ExchageComponent';

import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LatestRateComponent} />
        <Route exact path="/exchange" component={ExchangeComponents} />
      </Switch>
    </div>
  );
}

export default App;
