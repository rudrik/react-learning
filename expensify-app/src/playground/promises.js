const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Rudrik',
        //     age: 31
        // });

        reject('Something went wrong!');
        resolve('this is my other resolve data');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');

