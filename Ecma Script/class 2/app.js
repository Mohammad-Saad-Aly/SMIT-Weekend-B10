// const fname = "Muhammad"

// {
//     const fname = "Ali"
//     console.log(fname)
// }

// console.log(fname)

// function abc(){
//     const a = 'abcd'
// }
// abc()
// console.log(a)

// const a = 'abcd'
// const a = 'fgh'

// console.log(a)


// console.log(a)
// const a = 'abcd'

// var pro = new Promise((resolve, reject) => {
//     var khilao = "zingerrrr"
//     if(khilao == 'zinger'){
//         resolve("han okay done")
//     }
//     else{
//         reject("not done")
//     }
// })

// pro.then((data)=>{
//     console.log(data)
// })

// pro.catch((err)=>{
//     console.log(err)
// }

// let getDiv = document.querySelector('#show')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(res => {
//     for(var i=0; i<res.length; i++){
//         getDiv.innerHTML += `
//         <p>${res[i].title}</p>
//         `
//     }
// })

let getDiv = document.querySelector('#show')
let getSearch = document.getElementById('search')

function displayNews() {

    fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2024-02-24&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9`)
        .then(res => res.json())
        .then(res => {
            for (var i = 0; i < res.articles.length; i++) {
                getDiv.innerHTML += `
            
            <div class="card d-flex " style="width: 18rem;">
                <img src="${res.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${res.articles[i].title}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
</div>
            
            `
            }
        }

        )
        .catch(err => console.log(err))
}

