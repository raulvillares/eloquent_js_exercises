module.exports = function(string) {
  console.log(string);
};

module.exports.backwards = function(string) {
    var reverseString = "";
    for(var i = string.length-1; i >= 0; i--)
        reverseString = reverseString+string[i];
    console.log(reverseString);
}