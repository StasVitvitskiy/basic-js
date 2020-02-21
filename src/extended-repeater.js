module.exports = function repeater(str, options) {
    let string = String(str);
    let defaultOptions = {
        repeatTimes: 0,
        separator: "+",
        addition: "",
        additionRepeatTimes: 0,
        additionSeparator: "|"
    };
    let completeOptions = Object.assign({}, defaultOptions, options);
    let repeatTimes = completeOptions.repeatTimes;
    let separator = completeOptions.separator;
    let addition = String(completeOptions.addition);
    let adRepTimes = completeOptions.additionRepeatTimes;
    let adSep = completeOptions.additionSeparator;
    string = string + Array(adRepTimes).fill(addition).join(adSep);
    return Array(repeatTimes).fill(string).join(separator);
};
  