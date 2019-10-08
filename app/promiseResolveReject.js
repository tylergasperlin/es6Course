let p = new Promise((resolve, reject) => { //reject and resolve are handlers
    setTimeout(() => resolve('rejected promise data'), 3000);
})


p.then(response => console.log(response)).catch(error => console.log(error));

console.log('after pro')

