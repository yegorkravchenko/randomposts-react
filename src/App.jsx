import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { Error404 } from './pages/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
