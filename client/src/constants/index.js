import axios from 'axios';

import roles from './roles';
import * as navRoutes from './nav-routes';
import * as apiData from './api-data';

axios.defaults.baseURL = `https://api.baserow.io/api`;
axios.defaults.headers.common[
  'Authorization'
] = `Token ${process.env.REACT_APP_BASEROW_TOKEN}`;

export { roles, navRoutes, apiData };
