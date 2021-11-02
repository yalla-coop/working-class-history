import axios from 'axios';
import handleError from '../format-error';
import { apiData } from '../../constants/index';
const DB_ROWS_TABLE = 'database/rows/table';

export const rejectArticle = ({ id }) => {
  return { data: `all good! article ${id} has been rejected`, error: null };
};

export const editArticle = ({ id }) => {
  return { data: `all good! article ${id} has been rejected`, error: null };
};

export const approveArticle = ({ id }) => {
  return { data: `all good! article ${id} has been rejected`, error: null };
};

export const getArticleData = () => {};

export const getAllArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=created_at&filter__field_177157__single_select_equal=${apiData.STATUS.published}`
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&filter__field_177157__single_select_equal=${apiData.STATUS.pending}` //
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=created_at&filter__field_177157__single_select_equal=${apiData.STATUS.published}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const updateArticleStatus = async ({ id, status }) => {
  try {
    const {
      data,
    } = await axios.patch(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/${id}/?user_field_names=true`,
      { status: apiData.STATUS[status] }
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&size=11&order_by=created_at&filter__field_177157__single_select_equal=${apiData.STATUS.published}`
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
