import axios from 'axios';
import handleError from '../format-error';
import { apiData } from '../../constants/index';
const DB_ROWS_TABLE = 'database/rows/table';

export const approveArticle = ({ id }) => {
  return { data: `all good! article ${id} has been rejected`, error: null };
};

export const getAllArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getAllArticlesByTag = async ({ tagId, options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=-year,-month,-day,-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}&filter__${apiData.COLUMNS.TAGS}__link_row_has=${tagId}`
    );

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getPendingArticles = async () => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.pending}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

export const getArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const updateArticleStatus = async ({
  id,
  status,
  reviewerId,
  ...rest
}) => {
  try {
    const {
      data,
    } = await axios.patch(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/${id}/?user_field_names=true`,
      { status, reviwer_id: [reviewerId], ...rest }
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

export const createArticle = async (body) => {
  try {
    // "https://api.baserow.io/api/database/rows/table/33215/?user_field_names=true"
    const { data } = await axios.post(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true`,
      body
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

export const getRecentArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getArticleById = async ({ id, options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/${id}/?user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getNextArticles = async ({ nextUrl, options = {} }) => {
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
