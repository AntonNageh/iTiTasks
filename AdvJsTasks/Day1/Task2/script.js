function reverse(){
    var arr = [];
    if(arguments.length == 0)
        throw new Error("Invalid arguments");
    else{
        for (let i = 0; i <= arguments.length; i++) {
            arr.push(arguments[i]);
        }
        arr = arr.sort(function(number, next){return number - next});
        arr = arr.reverse()
        arr.shift();
    }
    return console.log(arr)
}

function reverse2() {
    if (arguments.length == 0)
      throw new Error("Invalid arguments");
    else {
      var arr = [];
      for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      var result = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
      }
      return console.log(result);
    }
  }
