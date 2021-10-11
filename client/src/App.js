import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route } from './components';
import * as Pages from './pages';
import { navRoutes } from './constants';
import { ScrollToTop } from './helpers';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Switch>
            <Route
              exact
              path={navRoutes.GENERAL.HOME}
              Component={Pages.Home}
              layout="general"
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
