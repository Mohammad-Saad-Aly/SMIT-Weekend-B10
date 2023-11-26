// var userName = prompt('Enter username')
// var password = prompt('Enter password')

// if(userName === 'admin' && password == 'admin'){
//     alert('login success')
//     location.href = './welcome.html'
// }
// else{
//     alert('not successful')
//     location.href = './index.html'
// }

// var num = +prompt('enter number')
// var num2 = +prompt('enter number 2')
// if (num === num2) {
//     alert('han num theak hai')
// }
// else {
//     alert('number galat')
// }

var maths = +prompt('Enter maths marks')
var eng = +prompt('Enter eng marks')
var isl = +prompt('Enter isl marks')
var bio = +prompt('Enter bio marks')
var fsx = +prompt('Enter fsx marks')
var total = maths + eng + isl + bio + fsx
var perc = (total / 500) * 100
var grade;

if (perc >= 80 && perc < 101) {
    grade = 'A+'
}
else if(perc >= 70){
    grade = 'A'
}
else if(perc >= 60){
    grade = 'B'
}
else if(perc >= 50){
    grade = 'C'
}
else if(perc >= 40){
    grade = 'D'
}
else{
    grade = 'F'
}


document.write(
    `<table border='2px'> 
    <tr>
    <th>Maths</th>
    <th>English</th>
    <th>Islamiat</th>
    <th>Bio</th>
    <th>FSX</th>
    <th>Percentage</th>
    <th>Grade</th>
    </tr>

    <tr>
    <td>${maths}</td>
    <td>${eng}</td>
    <td>${isl}</td>
    <td>${bio}</td>
    <td>${fsx}</td>
    <td>${perc}</td>
    <td>${grade}</td>
    </tr>
    </table>`
)
























// console.log(perc.toFixed(2))












