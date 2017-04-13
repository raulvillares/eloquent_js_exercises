var daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];
function dayName(number) {
  return daysNames[number];
}

console.log(dayName(1));

// variable names can be accesed from outside the function

console.log(daysNames[1]);

// we don't want this!

var dayName = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return function(number) {
    return names[number];
  };
}();

console.log(dayName(3));
try {
  console.log(names[3]); // error
} catch(e) {
  console.log(e);
}

// why can't i simply do this:

dayName = function(number) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return names[number];
}

console.log(dayName(3));
try {
  console.log(names[3]); // error
} catch(e) {
  console.log(e);
}

// A convenient alternative is to declare an object (conventionally named exports)
// and add properties to that whenever we are defining something that needs to be exported.

(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday")));

