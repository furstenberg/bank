import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from '@bootstrap-styled/v4';
import { history } from './utils';
import Menu from './components/menu';
import * as pages from './pages';

history.push('/login');
const App = () => (
  <Router history={history}>
    <Container>
      <Menu />
      <Switch>
        <Route path="/login" component={pages.Login} />
        <Route path="/transfer" component={pages.Transfer} />
        <Route path="/" component={pages.Home} />
      </Switch>
    </Container>
  </Router>
);

export default App;
