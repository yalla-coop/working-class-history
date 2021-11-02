import { apiData } from '../../constants/index';
import axios from 'axios';
import handleError from '../format-error';
import { createUniqueID } from '../../helpers';
const DB_ROWS_TABLE = 'database/rows/table';

export const isEmailUsed = async ({ email, options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.reviewers}?user_field_names=true&filter__field_177159__equal=${email}`
    );
    return data?.count === 1;
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const login = async ({ email, PIN, options = {} }) => {
  try {
    const { data } = await axios.get(
      `${DB_ROWS_TABLE}/${apiData.TABLES.reviewers}?user_field_names=true&filter__field_177159__equal=${email}&filter__field_177161__equal=${PIN}`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export const signup = async ({
  full_name,
  email,
  why_join,
  academic_credentials,
  options = {},
}) => {
  try {
    const { data } = await axios.post(
      `${DB_ROWS_TABLE}/${apiData.TABLES.reviewers}/?user_field_names=true`,
      {
        full_name,
        email,
        why_join,
        academic_credentials,
        Approved: false,
        pin: createUniqueID(),
        articles: [],
      }
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
