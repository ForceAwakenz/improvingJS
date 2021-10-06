'use strict';

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<h3>${post.title}</h3><p style="color:#fff; text-shadow: none;">${post.body}</p>`
        })
        document.body.innerHTML = output;
    }, 2000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }


        }, 3000); 
    });

}

// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(console.error);

// Async / Await

async function init() {
    await createPost({title: 'Post three', body: 'This is post three'});
    getPosts();
}

init();

// Async / Await with fetch

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users1 = await res.json();
    console.log(users1);
}

getUsers();

// Promise.all

// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye!');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(console.log);
// Promise.race([promise1, promise2, promise3, promise4]).then(console.log);

// promise4.then(console.log)




const delay = ms => new Promise(r => setTimeout(()=> r(ms), ms));

delay(6000).then((ms) => console.log(`delayed for ${ms/1000}s`));


const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchToDos() {
    console.log('fetching data from the server');
    return delay(2000)
        .then(() => fetch(url))
        .then(r => r.json());
} 

fetchToDos()
    .then(data => console.log('Data:', data))
    .catch(console.error);


async function fetchSomeData() {

    try {
        console.log('fetching some data');
        await delay(7000);
        const r = await fetch(url);
        const data = await r.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

fetchSomeData().then(() => console.log('async function return promise, so we can chain then method as well'));