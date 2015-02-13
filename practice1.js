/* Nathan Samano
 * Populate an array with 1 .. 10
 * Increase gap by 1 each time (1 3 6 10)
 */

function sequence() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push(i+1);
  }
  print(arr);
}

function skip() {
  var arr = [];
  for (var i = 0; i < 10; i+=2) {
    arr.push(i+2);
  }
  print(arr);
}

function gap() {
  var arr = [],
      n = 1;
  for (var i = 0; i < 4; i++,n++) {
    if (arr[i-1] == undefined)
      arr.push(i+n);
    else
      arr.push(arr[i-1]+n);
  }
  print(arr);
}

sequence();
skip();
gap();
