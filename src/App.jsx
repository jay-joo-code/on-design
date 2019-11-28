import React from 'react';
import { ThemeProvider } from 'styled-components';
import Spark from 'components/Spark';
import Encourage from 'components/Encourage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from 'theme';
import ScrollTop from 'components/util/ScrollTop';

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <ScrollTop />
      <Switch>
        <Route path="/encourage" component={Encourage} />
        <Route exact path="/" component={Spark} />
      </Switch>
    </Router>
  </ThemeProvider>
)
};

export default App;
