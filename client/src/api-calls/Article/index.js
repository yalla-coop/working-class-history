/* eslint-disable no-console */
import axios from 'axios';
import handleError from '../format-error';
import { apiData } from '../../constants/index';
import { getTagById } from '../Tag/index';
const DB_ROWS_TABLE = 'database/rows/table';

export const approveArticle = ({ id }) => {
  return { data: `all good! article ${id} has been rejected`, error: null };
};

export const getAllArticles = async ({ options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&order_by=-year,-month,-day,-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}&filter__${apiData.COLUMNS.TAGS}__link_row_has=${tagId}`
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.pending}`
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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
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
    // check it already exists
    if (body?.spreadsheet_ref) {
      const { data } = await axios.get(
        `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&filter__field_398055__contains=${body?.spreadsheet_ref}`
      );
      if (data?.results?.length) {
        console.log('data', data?.results[0]);
        return { data: data.results[0] };
      }
    }

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
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true&order_by=-created_at&filter__${apiData.COLUMNS.STATUS}__single_select_equal=${apiData.STATUS.published}`
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

    const tagsWithData = await Promise.all(
      data?.tags?.map(async (tag) => await getTagById({ id: tag?.id }))
    );
    console.log('tags', tagsWithData);

    return { data, tagsWithData };
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

export const deleteAllArticles = async () => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/?user_field_names=true`
    );
    for (let i = 0; i < data.count; i++) {
      setTimeout(async () => {
        const res = await axios.delete(
          `${DB_ROWS_TABLE}/${apiData.TABLES.articles}/${
            data.results[0].id + i
          }/`
        );
        console.log('res', res, data.results[i]);
      }, i * 500);
    }

    return;
  } catch (error) {
    console.log('err', error);
    // const err = handleError(error, options);
    return { error: error };
  }
};
