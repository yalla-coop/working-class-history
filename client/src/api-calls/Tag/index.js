/* eslint-disable no-console */
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

export const deleteAllTags = async () => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.tags}?user_field_names=true`
    );
    console.log('COUNT', data.count);
    for (let i = 0; i < data.count; i++) {
      setTimeout(async () => {
        const res = await axios.delete(
          `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/${data.results[0].id + i}/`
        );
        console.log('res', res, i);
      }, i * 500);
    }

    console.log('DELETED');
    return;
  } catch (error) {
    console.log('err', error);
    // const err = handleError(error, options);
    return { error: error };
  }
};

export const createUpdateTagsAutomatically = async ({
  people = [],
  organisations = [],
  topics = [],
  city = [],
  country = [],
  articleId,
}) => {
  try {
    // "https://api.baserow.io/api/database/rows/table/33215/?user_field_names=true"
    // check it tag already exists

    const catData = [
      {
        dbId: 17946,
        data: people,
      },
      {
        dbId: 17947,
        data: organisations,
      },
      {
        dbId: 17948,
        data: city,
      },
      {
        dbId: 17949,
        data: country,
      },
      {
        dbId: 17950,
        data: topics,
      },
    ];

    for (let h = 0; h < catData.length; h++) {
      if (catData[h].data.length > 0) {
        for (let i = 0; i < catData[h].data.length; i++) {
          setTimeout(async () => {
            // check if tag already exists
            const { data } = await axios.get(
              `${DB_ROWS_TABLE}/${
                apiData.TABLES.tags
              }/?user_field_names=true&filter__${
                apiData.COLUMNS.TAG_TITLE
              }__equal=${catData[h].data[i].trim()}&filter__${
                apiData.COLUMNS.CATEGORY
              }__single_select_equal=${h.dbID}`
            );

            if (data.count === 0) {
              // create tag
              const res = await axios.post(
                `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/?user_field_names=true`,
                {
                  Title: catData[h].data[i].trim(),
                  Category: catData[h].dbId,
                  Active: true,
                  articles: [articleId],
                }
              );
              console.log('create', res, i);
            } else {
              const existingArticleIds = data.results[0].articles.map(
                (a) => a.id
              );
              // update tag to link to new article
              const res = await axios.patch(
                `${DB_ROWS_TABLE}/${apiData.TABLES.tags}/${data.results[0].id}/?user_field_names=true`,
                {
                  Title: catData[h].data[i].trim(),
                  Category: catData[h].dbId,
                  Active: true,
                  articles:
                    existingArticleIds.length > 0
                      ? [...existingArticleIds, articleId]
                      : [articleId],
                }
              );
              console.log('update', res, i);
            }
          }, i * 1000);
        }
      }
    }

    return;
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};
