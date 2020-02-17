module.exports = function countCats(arr) {
  return arr.reduce((acc, cur) => {
        return acc + cur.filter((el) => {
            return el === "^^";
        }).length;
      }, 0);
};
