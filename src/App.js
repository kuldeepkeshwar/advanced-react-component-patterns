import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Combined from './Combined';
import Exercise from './Exercise';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <Router>
    <div style={styles}>
      <Route exact path="/" component={Home} />
      <Route path="/exercise/:file" component={Exercise} />
      <Route path="/final Version/:file" component={Exercise} />
      <Route exact path="/:file" component={Combined} />
    </div>
  </Router>
);
export default App;
