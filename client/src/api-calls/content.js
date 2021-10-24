import axios from 'axios';
import handleError from './format-error';

const getRecentArticles = async ({ options }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}?order_by=created_at`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getArticleById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(
      `database/rows/table/${apiData.TABLES.articles}/${id}/?order_by=created_at`
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

export { getRecentArticles, getArticleById, getArticlesByCategory };
