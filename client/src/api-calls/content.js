import axios from 'axios';
import handleError from './format-error';

import { apiData } from '../constants/index';

const getAllArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}?user_field_names=true&order_by=created_at` // field_177156
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getRecentArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}?user_field_names=true&size=11&order_by=created_at` // field_177156
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getTags = async () => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.tags}?user_field_names=true` // field_177156
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const getArticleById = async ({ id, options = {} }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}/${id}/?user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getTagById = async ({ id, options = {} }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.tags}/${id}/?user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getTagArticles = async ({ tagName, options = {} }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}/?filter__field_177173__link_row_has=${tagName};user_field_names=true`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getArticlesByCategory = async ({ category, options }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}/?filter_field_177252_multiple_select_has=${category};order_by=created_at`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  getRecentArticles,
  getArticleById,
  getArticlesByCategory,
  getTags,
  getTagById,
  getTagArticles,
  getAllArticles,
};
