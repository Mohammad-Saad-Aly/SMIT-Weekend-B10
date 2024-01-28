// var arr = [1, 'Ali', 'CSC-20S-088']

// document.write(arr)
// arr[1]

// var obj = {
//     id : '01',
//     sName: "Ali",
//     roll_no : "CSC-20S-088"
// }

// for(var key in obj){
//     document.write(`${key} : ${obj[key]} <br>`)
// }


// document.write(obj)
// console.log(obj)


// document.write(obj.sName)


// var obj = {
//     fname: "ABCD",
//     num: 12,
//     bool: false,
//     arr: ['abcd', 10, 'def', true],
//     abc : function(){
//         alert('hello world')
//     }
// }


// obj.abc()

// document.write(obj.arr)

// console.log(obj)

// var arr = []

// arr[0] = 'Saad'
// arr[1] = 'Ali'

// console.log(arr)

// var obj = {}

// obj.name = "Saad"

// console.log(obj)


// var arr = {
//     key : 'value',
//     abcd: '1234'
// }

// document.write(arr.key)

// for(var key in arr){
//     document.write(`${key} :${arr[key]} <br>`)
// }


// localStorage.setItem('id','01')

// localStorage.clear()

// sessionStorage.setItem('name','Ali')




function signup(){
    var getEmail = document.querySelector('#email')
    var getPass = document.querySelector('#pass')
    localStorage.setItem('email',getEmail.value)
    localStorage.setItem('password',getPass.value)
    alert('Sign Up successful')
    location.href = './signin.html'
}

function signin(){
    var getEmail = document.querySelector('#semail').value
    var getPass = document.querySelector('#spass').value
    if(localStorage.getItem('email') == getEmail && localStorage.getItem('password') == getPass){
        alert('Login Successful')
        location.href = './welcome.html'
    }
    else{
        alert('jaa beta sign kar k aa')
        location.href = './signup.html'
    }
}




