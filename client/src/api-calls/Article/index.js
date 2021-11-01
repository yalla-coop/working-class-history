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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&order_by=created_at` // field_177156
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const getRecentArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}?user_field_names=true&size=11&order_by=created_at` // field_177156
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
