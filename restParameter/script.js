// function jumlah(...myArg) {
//   const arr = myArg;
//   return arr.reduce((a, b) => a + b, 0);

// }

// console.log(jumlah(1,2,3,4,5,6));


// filtering
function myFilter(type, ...values) {
  return values.filter(value =>  typeof value === type);

}

console.log(myFilter('boolean', 1,2,5,'akmal',false,true));