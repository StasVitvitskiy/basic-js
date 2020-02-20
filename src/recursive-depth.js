module.exports = class DepthCalculator {
    calculateDepth(arr) {
       return arr.reduce((acc, cur) => {
           if(cur instanceof Array) {
               return Math.max(1+ this.calculateDepth(cur),acc);
           }
           return acc;
       },1)
    }
};