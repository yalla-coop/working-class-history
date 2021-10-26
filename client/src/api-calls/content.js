import axios from 'axios';
import handleError from './format-error';

import { apiData } from '../constants/index';
const DB_ROWS_TABLE = 'database/rows/table';

const getArticlesByCategory = async ({ category, options }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?filter_field_177252_multiple_select_has=${category};order_by=created_at`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getArticlesByCategory };
