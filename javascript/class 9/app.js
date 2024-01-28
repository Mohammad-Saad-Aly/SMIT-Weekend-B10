// functions.

// function sum(a, b){
//     return a + b
// }

// document.write(sum())
// document.write(sum(10, 10))

// function btnClick(){
//     alert('working...')
// }


// function getValue(){
//     var getn = document.getElementById('getInp').value
//     console.log(getn)

// 

// }



function getValue(e){
    var getInp = document.getElementById('getInp')
    getInp.value += e
}

function eq(){
    var getInp = document.getElementById('getInp')
    getInp.value = eval(getInp.value)
}

function clrall(){
    document.getElementById('getInp').value = ''
}