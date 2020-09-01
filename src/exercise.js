// const players = ['sachin', 'virat', 'dhoni','yuvi']
// const indices = [1,3]

// function arrayExcept(players, indices) {
//     let i;
//     let play = []

//   const result =   players.filter(function(ele, i){
      
//     })
//     return result
  
// }

// console.log(arrayExcept(players, indices)) // ['sachin','dhoni'] 

//************************************************************************************************* */
// const myZoo = [
//     ["King Kong", ["gorilla", 42]],
//     ["Nemo", ["fish", 5]],
//     ["Phil", ["groundhog", 11]]
// ]

// // console.log(myZoo.length) // 3
// // console.log(myZoo[0]) // ["King Kong", ["gorilla", 42]]
// // console.log(myZoo[0][0]) // 'King Kong'
// // console.log(myZoo[0][1]) // [ 'gorilla', 42 ]
// // console.log(myZoo[0][1][0]) // 'gorilla'
// // console.log(myZoo[0][1][1]) // 42


// function zooInventory(myZoo){
//     const result = []
//     for(let i=0; i<myZoo.length; i++){
//         const str = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
//         result.push(str)
//     }
//     return result
// }
// console.log(zooInventory(myZoo))


// function Inventory(myZoo){
//     let i
//     const result = myZoo.map(function(ele){
//         return `${ele[0]} the ${ele[1][0]} is ${ele[1][1]} `
//     })
//     return result
// }
// console.log(Inventory(myZoo))


// unordered, string indexed, collection of values
// const person = {
//     // name: 'manish',
//     // city: 'bangalore'
// }
// console.log(person)

// person.designation = 'full stack developer'
// person.xyz = 4000
// console.log(person)

//********************************************************************************** */

// function test(a, b) {
//     var total = 0, y, result1=0, result2=0, result3=0;
//     var obj = {}
//     for(var i = 0; i < b.length; i++) { 
//         y = a.indexOf(b[i][0]);
//         console.log(y)
          
//       if(y >= 0 && y+1 != "string"){
//           if(total == 0){
//             total =  a[y+1] * b[i][1];
//             result1 = obj[a[y]] = total
//             //return obj
//           }
//           else{
//               total =  a[y+1] * b[i][1];
//               result2 = obj[a[y]] = total
//               //return obj
//           }
//       }
//        if(typeof y+1 == "string") {
//          return 5
//         // return obj[a[y]] = "company does not exist"
//         // obj[a[y + 1]] = b[i][1]
//         // obj.total = b[i][1]
//         // return obj
//     }
//     }
//     // result = result1 + result2
//     // //console.log(result)
//     // obj.total = result 
//     //return obj
     
//     //return total;
//   }

// var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
// var portfolio = [['XYZ', 20], ['BBB', 10]];
// console.log(test(ticker, portfolio))

// var ticker = ['ABC',10, 'XYZ', 'BBB', 5];
// var portfolio = [['XYZ', 20], ['HOPE', 50]];
//console.log(typeof ticker[3])




function test(a,b){
  let res, res1, res2, val, total = 0
  let object = {}
  for (let i = 0; i < b.length; i++){
      val = a.indexOf(b[i][0])
      if (val >= 0) {
          if (total == 0) {
              total = a[val + 1] * b[i][1]
              res1 = object[a[val]] = total
          }
          else {
              total = a[val + 1] * b[i][1]
              res2 = object[a[val]] = total
          }
      }
  }

  res = (res1 + res2)
  object.total = res
  return object
   
}

var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];
console.log(test(ticker, portfolio))


//[iifiiconsole.log(test(ticker, portfolio))


