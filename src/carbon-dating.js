const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
function strToFloat(str) {
    let result = "";
    let wasDotFound = false;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ".") {
            result += str[i];
        } else if(!wasDotFound) {
            result += str[i];
            wasDotFound = true;
        }
    }
    return +result;
}
module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== "string") {
        return false;
    }
    let float = strToFloat(sampleActivity);
    if(isNaN(float) || float <= 0 || float > MODERN_ACTIVITY) {
      return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY/(float))/(0.693/HALF_LIFE_PERIOD));
};
