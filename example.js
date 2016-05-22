function incrByOne(value) {
  return value + 1;
}

function incrByTwo(value) {
  return value + 2;
}

function incrByThree(value) {
  return value + 3;
}
  function foo(){
  var n = 1;
    var incrementingFuntion = function (value) {
      return value + n;
    }
    return incrementingFuntion;
  }
  var n = 6;
  var state = 0;
  console.log(foo()(state));
