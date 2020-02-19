module.exports = function transform(arr) {
    if(arr instanceof Array === false) {
        throw new Error;
    }
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '--discard-next' || arr[i-1] === '--discard-next') {

        } else if(arr[i] === "--discard-prev") {
            if( newArr.length !== 0) {
                newArr.length = newArr.length -1;
            }
        } else if(arr[i] === "--double-next") {
            if(arr[i+1] !== undefined) {
                newArr.push(arr[i+1])
            }
        } else if(arr[i] === "--double-prev") {
            if( arr[i-1] !== undefined) {
                newArr.push(arr[i-1]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
