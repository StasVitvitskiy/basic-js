module.exports = function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(date instanceof Date === false || date.hasOwnProperty("getMonth")) {
    throw new Error;
  }
  if(date.valueOf() === undefined) {
    throw new Error;
  }
  if(new Date(date).getMonth()+1 === 12 || new Date(date).getMonth()+1 < 3) {
    return "winter";
  }
  if(new Date(date).getMonth()+1 > 2 && new Date(date).getMonth()+1 < 6) {
    return "spring";
  }
  if(new Date(date).getMonth()+1 > 5 && new Date(date).getMonth()+1 < 9) {
    return "summer";
  }
  if(new Date(date).getMonth()+1 > 8) {
    return "fall";
  }
};
