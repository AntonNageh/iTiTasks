function getsetGen(obj) {
  for (const prop in obj) {

    const getter = function() {
      return obj[prop];
    };

    const setter = function(value) {
      obj[prop] = value;
    };

    obj['get' + prop] = getter;
    obj['set' + prop] = setter;
  }
}
obj = {
  name: "Ali",
  age: 5    ,
  gender : "male"
}