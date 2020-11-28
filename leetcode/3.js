 const numbers = [3,62,234,7,23,74,23,76,92];
 const arr=[];
//  const largeNumbers=numbers.forEach(function(e,i){
//      if(e>70){
//          arr.push(e);
//      }
//  })
//基础上 forEach回调函数 函数中有一个值可省略花括号
// filter内置函数

const cb=number => number >70
const largeNumbers=numbers.filter(sb)
 console.log(largeNumbers);