const addDays = require("date-fns/addDays");

const daysFunction = (days) => {
  let result = addDays(new Date(2020, 06, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = daysFunction;
