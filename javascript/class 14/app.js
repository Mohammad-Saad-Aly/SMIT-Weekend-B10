// indexOf
// lastIndexOf

// var names = ["rehman",'kashif','rizwan','abdullah',"kashif"]
// var newArray = names.replace("rehman","Ali")
// console.log(newArray)



// var check = names.lastIndexOf("kashif")
// var check = names.indexOf("kashif",2)

// console.log(check)

// var str = "Rehman"

// var check = str.indexOf("R")

// console.log(check)


// var name1 = "Ali"
// var ch = name1.charAt(6)
// console.log(ch)

// var text = "Hello world hello world"

// var rp = text.replaceAll('world','Saylani')

// var rp = text.replace(/world/g,'Pakistan')

// console.log(rp)

// console.log(Math.random() * 4)

// var userInp = parseInt(prompt("Enter value"))
// document.write(typeof(userInp))

// var str = 34.72648723678
// console.log(str.toFixed(1))

// console.log(typeof(str.toString()))
// console.log(typeof(Number(str)))

// var days = ['sun','mon','tues','wed','thurs','fri','sat']
// var rightNow = new Date()

// console.log(days[rightNow.getDay()])

// console.log(rightNow.getDay())


// console.log(rightNow.toString().slice(16,24))
// document.write(rightNow.toString().slice(0,10))



// var date = new Date()
// console.log(date.getTime())

// var rightNow = new Date().getTime()
// var dob = new Date('14 aug, 1947').getTime()
// var res = rightNow - dob
// var convert = res / (1000 * 60 * 60 * 24 * 365)
// console.log(Math.floor(convert))

// var userInp = prompt('Enter car name ?')

// switch(userInp){
//     case 'civic':
//         console.log('civic')
//         break;
//     case 'mehran':
//         console.log('mehran')
//     break;
//     default:
//         console.log('abc')
// }



// if(userInp == 'civic'){
//     console.log('achi gari hai')
// }
// else if(userInp == 'mehran'){
//     console.log('mehnat ki gari hai or bhi achi hai')
// }

// else if(userInp == 'bike'){
//     console.log('shapatar')
// }
// else{
//     console.log('ghareebon')
// }


// var a = moment().subtract(6, 'days').calendar();

// const now = moment();
//     const formattedDate = now.format('YYYY-MM-DD HH:mm:ss');
    
//     // Display the formatted date in the 'output' div
//     document.getElementById('output').textContent = formattedDate;

var now = moment()
const formattedDate = now.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate)