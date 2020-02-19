module.exports = function createDreamTeam(members) {
  if(members instanceof Array === false) {
    return false;
  }
    return members.filter((el) => {
        return typeof el === "string";
    }).map((el) => {
        return el.trim()[0].toUpperCase();
    }).sort().join("");
};