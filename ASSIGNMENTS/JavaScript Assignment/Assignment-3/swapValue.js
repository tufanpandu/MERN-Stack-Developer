///============ Swap two value using Destructuring assignments =========

let x = 5;
let y = 10;
function swapValue(x,y){
   [x, y] = [y,x] // Destruncture the array
  return  [x,y];
}

console.log(swapValue(x,y));