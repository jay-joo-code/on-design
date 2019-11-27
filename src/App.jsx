import React from 'react';
import { ThemeProvider } from 'styled-components';
import Spark from 'components/Spark';
import Encourage from 'components/Encourage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = {
  colors: {
    red: '#f44242',
    green: '#68BB59',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/encourage" component={Encourage} />
        <Route exact path="/" component={Spark} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
