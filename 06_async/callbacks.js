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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000)
}

getPosts();

createPost({title: 'Post three', body: 'This is post three'}, getPosts);
