function add(a, b) {
  return a + b;
}
function square(a) {
  return a * a; 
}
function plusOne(a) {
  return a + 1;
}

var addSquareAndPlusOne = composite(add, square, plusOne);

let result = addSquareAndPlusOne(1, 2);
console.log(result);

function composite(...args) {
  return (...arguments) => {
    const init = args[0].apply(null, arguments);
    return args.slice(1).reduce((memo, current) => {
      return current(memo)
    }, init)
  }
}

// const composite = (...args) => {
//   return (...arguments) => {
//     return args.reduce((memo, current) => {
//       return current(typeof memo === 'function' ? memo.apply(memo, arguments) : memo);
//     })
//   }
// }