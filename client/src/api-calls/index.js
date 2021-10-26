import axios from 'axios';

import * as Users from './users';
import * as Content from './content';

// DUMMY TO BE REPLACED
import * as Article from './Article';

axios.defaults.baseURL = `https://api.baserow.io/api/database`;
axios.defaults.headers.common[
  'Authorization'
] = `${process.env.REACT_APP_BASEROW_TOKEN}`;

export { Users, Content, Article };
