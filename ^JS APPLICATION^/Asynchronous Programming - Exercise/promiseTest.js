// //promise example
// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         if(Math.random() > 0.5){
//             resolve('Just married...');
//         }else{
//             reject('Sorry its me ')
//         }
//     }, 3000);
// });

// console.log(promise);

// promise.then((result) => {
//     console.log(result);
// })

// promise.catch((reason) => {
//     console.log(reason);
// })



// promise.then((result) => {
//     console.log(result);
// }).promise.catch((reason) => {
//     console.log(reason);
// })

let alwaysResolvingPromis = Promise.resolve('yes');
let alwaysRejectPromis = Promise.reject('No')

alwaysResolvingPromis
    .then(res => console.log(res))
    .catch((err) => console.log('Never used'))
    //finally can be invoked directly on the prototype of the Promise class
    .finally(() => {
        console.log('Finally');
    })

alwaysRejectPromis
    .catch((reason) => console.log(reason));

//All of the promises must returned positive ending
let multiplePromises = Promise.all([
    alwaysResolvingPromis,
    Promise.resolve('Yexs2'),
])

multiplePromises.then(res => {
    console.log(res);
})
//All of the promises must returned, no matter of the result
let multiplePromises2 = Promise.allSettled([
    alwaysResolvingPromis,
    Promise.resolve('Yexs2'),
])
//The fastest of all the promises will execute 
let multiplePromises3 = Promise.allSettled([
    alwaysResolvingPromis,
    Promise.resolve('Yexs2'),
])
