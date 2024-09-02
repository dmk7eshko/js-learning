let a = 4;

// setTimeout(() => {
//     a = 99;
// }, 2000);


let b = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve( a = 99);
    }, 2000);
})

b.then(() => console.log(a))


console.log(a);