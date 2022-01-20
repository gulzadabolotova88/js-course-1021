// function sum(a = 0,b = 0) {
//     if(!a || !b) {
//         return 'Error'
//     }
// return a + b
// }
// console.log(sum(2,3))
// console.log(sum())

function sum (...items) {
return items.length > 0
 ? items.reduce((a,b) => a + b) 
 : 0
}
console.log(sum(2,3,6,7,8,7))
console.log(sum())
