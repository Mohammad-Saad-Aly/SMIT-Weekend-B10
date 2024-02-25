// var a = setInterval(function(){
//     console.log('hello world')
// },1000)

// clearInterval(a)


// setTimeout(function(){
//     console.log('saylani')
// },5000)

// var num = 0

// function inc(){
//     num++
//     console.log(num)
// }

// setInterval(inc, 1000)

var min = 0
var sec = 0
var msec = 0
var htmlmin = document.querySelector('#min')
var htmlsec = document.querySelector('#sec')
var htmlmsec = document.querySelector('#msec')
var rokDo;
// var flag = false
function start(){
   // if(flag == false){
        rokDo = setInterval(function(){
            // flag = true
            msec++
            htmlmsec.innerHTML = msec
            if(msec >= 100){
                sec++
                htmlsec.innerHTML = sec
                msec = 0
            }
            else if(sec >= 10){
                min++
                htmlmin.innerHTML = min
                sec = 0
            }
        },10)
        document.querySelector("#startBtn").disabled = true
    }
// }
function stop(){
    clearInterval(rokDo)
    document.querySelector("#startBtn").disabled = false
}
function reset(){
    min = 0
    msec = 0
    sec = 0
    htmlmin.innerHTML = min
    htmlmsec.innerHTML = msec
    htmlsec.innerHTML = sec
}