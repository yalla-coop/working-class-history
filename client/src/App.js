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
              path={navRoutes.GENERAL.STORIES}
              Component={Pages.LandingPage}
              layout="general"
              landingPage
              maxWidth="1050px"
            />
            <Route
              exact
              path={navRoutes.GENERAL.LandingPage}
              Component={Pages.LandingPage}
              layout="general"
              landingPage
              maxWidth="1050px"
            />
            <Route
              exact
              path={navRoutes.GENERAL.TAG}
              Component={Pages.TagPage}
              layout="general"
              maxWidth="1050px"
            />
            <Route
              exact
              path={navRoutes.GENERAL.ARTICLE}
              Component={Pages.ArticlePage}
              layout="general"
              maxWidth="1050px"
            />
            <Route
              exact
              path={navRoutes.GENERAL.SIGN_UP}
              Component={Pages.SignupPage}
              layout="general"
              maxWidth="1050px"
            />
            <Route
              exact
              path={navRoutes.GENERAL.LOGIN}
              Component={Pages.LoginPage}
              layout="general"
              maxWidth="1050px"
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
