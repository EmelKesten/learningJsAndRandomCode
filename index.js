/* CURRENTLY WORKING ON CODE */

function saleHotDog(n){
  return n<5 ? n*100 : n<10 && n>=5 ? n*95 : n>=10 ? n*90 : 0;
}

console.log(saleHotDog(1));
console.log(saleHotDog(5));
console.log(saleHotDog(11));

function countGrades(arr){
  const obj = {
    s: arr.filter(num => num === 100).length,
    a: arr.filter(num => num >= 90 && num < 100).length,
    b: arr.filter(num => num >= 80 && num < 90).length,
    c: arr.filter(num => num >= 60 && num < 80).length,
    d: arr.filter(num => num >= 0 && num < 60).length,
    x: arr.filter(num => num === 0).length
  }
  return obj
}

console.log(countGrades([100, 95, 90, 81]))