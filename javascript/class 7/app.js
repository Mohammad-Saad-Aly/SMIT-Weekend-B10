// var arr = ["abc", "def", "ghi", "jkl"];
// var arr2 = ["Saylani", "SMIT"];

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr2.length; j++){
//         document.write(arr[i]+" "+arr2[j] + "<br>")
//     }
// }

// for (var i = 1; i <= 100; i = i + 10) {
//   for (var j = i; j < i + 10; j++) {
//     document.write(j + "");
//   }
//   document.write("<br><br><br>");
// }

// for (var i = 1; i <= 5; i++) {
//     for(var j=1; j <= i; j++){
//         document.write(j," ")
//     }
//     document.write("<br>")
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 5; j >= i; j--) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// for(var i=1; i<=5; i++){
//     for(var j=1; j<=i; j++){
//         document.write(j," ")
//     }
//     document.write("<br>")
// }

// for(var i= 1; i<=5; i++){
//     for(var j=5; j>=i; j--){
//         document.write(j+" ")
//     }
//     document.write("<br>")
// }

// for(var i=1; i<=5; i++){
//     for(var j=1; j<=i; j++){
//         document.write("*" ," ")
//     }
//     document.write('<br>')
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// *
// * *
// * * *
// * * * *
// * * * * *

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

// for(var i=1; i<=5; i++){
//     for(var j=1; j <=5; j++){
//         document.write(j," ")
//     }
//     document.write('<br>')
// }


var gariyaan = ['Audi','Mehran','Alto','Bmw']

var userInp = prompt('Enter konsi gari chahye ?')

var match = 'no'

for(var i=0; i< gariyaan.length; i++){
    if(userInp == gariyaan[i]){
        match = 'yes'
        document.write(userInp+" found")
        break;
    }
}

if(match == 'no'){
    document.write(userInp + " not found")
}


// var city = 'BADA'
// document.write(city.toLowerCase())



var userInp = prompt('Enter karo naam')

var firstAlpha = userInp.slice(0,1).toUpperCase()
var baqiAlpha = userInp.slice(1).toLowerCase()

var res = firstAlpha + baqiAlpha

document.write(res)













