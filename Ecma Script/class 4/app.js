// closures in js

// function outer(){
//     var a = "Saad"
//     function inner(){
//         console.log(a)
//     }

//     return inner;

// }

// let fn = outer()

// fn()

// function makeAdder(x) {

//     return function (y) {
//       return x + y;
//     };
//   }

//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);

//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12

// let getPara = document.querySelector("#para");
// let getBtn = document.querySelector("#btn");

// function makeSizer(size) {
//   return function () {
//     getPara.style.fontSize = `${size}px`;
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(20);
// const size16 = makeSizer(40);

// getBtn.addEventListener('click', size12)


// function sum(a, b, ...args){

//     let sum = 0

//     for (const iterator of args) {
//         sum += iterator
//     }


//     // for(var key in args){
//     //     sum += args[key]
//     // }



//     return a + b + sum
// }

// console.log(sum(20, 20, 20, 40, 349, 349, 34))


// IIFE
// (function printAlpha(){
//     console.log('hello world')
// })()


// Enhanced Object Literals.

// let fname = "Saad"


// let obj = {
//     fname
// }


// console.log(obj)

// let key = 'first Name: '
// let obj = {
//     fname: "Samit",
//     [key] : "Saad Ali",
//     foo(){
//         return this.fname
//     }
// }


// var fn = obj.foo()
// console.log(fn)