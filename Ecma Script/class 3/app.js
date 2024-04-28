// const arr = [12, 34, 5, 63, 32, 56, 73, 43]
// let arr2 = arr.filter((data)=>{
//     return data >= 50
// })
// console.log(arr2)


// arr.map(data=>console.log(data))
// arr.forEach(data=>console.log(data))

// arr = [1,2,3]
// document.write(arr)

// const fname = 'abc'
// fname = 'def'

// document.write(fname)


// let arrOfObj = [
//     {
//         name: "abc",
//         ins: "smit"
//     },
//     {
//         name: "def",
//         ins: "saylani"
//     }
// ]

// localStorage.setItem('object',JSON.stringify(arrOfObj))


// let abc = localStorage.getItem('object')

// document.write(JSON.parse(abc))
let arr = []

let signup = ()=>{
    let email = document.querySelector('#semail').value
    let pass = document.querySelector('#spass').value
 
    let obj = {
        email1: email,
        pass1: pass
    }
 
    arr.push(obj)
 
    localStorage.setItem('data', JSON.stringify(arr))

}