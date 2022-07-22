import getMonthName from './get-month-name';

const formatDate = (year, month, day) => {
  if (year && month && day) {
    return `${day} ${getMonthName(month)} ${year}`;
  } else if (year && month) {
    return `${getMonthName(month)} ${year}`;
  } else return `${year}`;
};

export default formatDate;
