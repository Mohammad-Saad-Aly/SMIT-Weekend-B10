// {
//     var a = "rehman"
// }
// console.log(a)


// console.log(a)
// let a = "saad"


// let a = "abc"
// a = "bcd"
// console.log(a)

// const pi = 3.14
// pi = 3.18
// console.log(pi)


// a;
// console.log(a)

// var a = "abcd"

// function abc(){

//    var a = "bcde"
//    console.log(a)

// }

// abc()
//     {
//         let a = "abcd"
//     }
// console.log(a)

// a = "rehman"
// var a;
// console.log(a)
// abc()
// function abc(){
//     console.log('hello world')
// }

// var obj = {
//     name: "smit",
//     ins: "abc",
//     hhh: "def"
// }

// var {name, ins, hhh} = obj
// console.log(ins)

// var arr = ['apple','orange','peach','banana','strawberry']
// var [a,b,c,e] = arr
// console.log(e)

// function abc(){
//     document.write('hello world')
// }
// abc()

// let abc = (a, b) => {
//     return a + b
// }
// console.log(abc(10,10))

// let a = (b,e) => console.log(b,e)
// a(9,10)


// function abc(a = 5, b = 10) {
//     return a - b
// }
// console.log(abc(10,10))

// var obj = {
//     a: "abcd",
//     b: "defg",
//     c: "123"
// }

// var obj2 = {
//     ...obj,
//     d: "jkl",
//     e: "mno"
// }
// console.log(obj2)

// var arr = ["a","b","c","d"]
// var arr2 = arr.splice(0,1)
// console.log(arr)

var arrOfObj = [
    {
        p_id: 1,
        p_name: "samsung",
        p_price: "98000",
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a546elgdpkd/gallery/pk-galaxy-a54-5g-sm-a546-sm-a546elgdpkd-538125045?$650_519_PNG$'
    },
    {
        p_id: 2,
        p_name: "iphone",
        p_price: "198000",
        p_img: "https://appleman.pk/cdn/shop/files/7_2bb62f25-5336-4668-a20a-f7abc5eaa585_800x.png?v=1697624202"
    },
    {
        p_id: 3,
        p_name: "motorola",
        p_price: "8000",
        p_img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Motorola_RAZR_V3i_01.JPG"
    },
    {
        p_id: 1,
        p_name: "samsung",
        p_price: "98000",
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a546elgdpkd/gallery/pk-galaxy-a54-5g-sm-a546-sm-a546elgdpkd-538125045?$650_519_PNG$'
    },
    {
        p_id: 2,
        p_name: "iphone",
        p_price: "198000",
        p_img: "https://appleman.pk/cdn/shop/files/7_2bb62f25-5336-4668-a20a-f7abc5eaa585_800x.png?v=1697624202"
    },
    {
        p_id: 3,
        p_name: "motorola",
        p_price: "8000",
        p_img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Motorola_RAZR_V3i_01.JPG"
    }
]

var getProducts = document.querySelector(".show")

for(var i=0; i<arrOfObj.length; i++){
    var products = arrOfObj[i]
    var proId = document.createElement('p')
    proId.innerHTML = products.p_id
    getProducts.appendChild(proId)

    var proName = document.createElement('p')
    proName.innerHTML = products.p_name
    getProducts.appendChild(proName)
    
    var proPrice = document.createElement('p')
    proPrice.innerHTML = products.p_price
    getProducts.appendChild(proPrice)

    var proImg = document.createElement('img')
    proImg.src = products.p_img
    getProducts.appendChild(proImg)
    proImg.setAttribute('class','abc')



}