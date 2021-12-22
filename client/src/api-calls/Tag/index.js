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
      `${DB_ROWS_TABLE}/${apiData.TABLES.tags}?user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

export const getTagsByCategory = async ({ category, options }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/?user_field_names=true&filter__${apiData.COLUMNS.CATEGORY}__single_select_equal=${category}`
    );

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getTagsByCategoryForSearch = async ({
  category,
  options,
  search,
}) => {
  try {
    if (search) {
      const { data } = await axios.get(
        `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/?user_field_names=true&filter__${apiData.COLUMNS.CATEGORY}__single_select_equal=${category}&search=${search}`
      );
      return { data };
    } else {
      const { data } = await axios.get(
        `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/?user_field_names=true&filter__${apiData.COLUMNS.CATEGORY}__single_select_equal=${category}`
      );

      return { data };
    }
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getNextTags = async ({ nextUrl, options = {} }) => {
  try {
    // need to do this so we can use https base for CORS purposes
    const cleanUrl = nextUrl.replace('http://api.baserow.io/api', '');
    const { data } = await axios.get(cleanUrl);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
