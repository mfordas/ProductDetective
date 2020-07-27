import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import AppContent from '../AppContent/AppContent';
import '../../styling/main_styling.scss'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={AppContent} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  );
}

export default App;