import { apiData } from '../../constants/index';
import axios from 'axios';
import handleError from '../format-error';
const DB_ROWS_TABLE = 'database/rows/table';

export const getTagById = async ({ id, options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/${id}/?user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getTags = async () => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.tags}?user_field_names=true` // field_177156
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};
