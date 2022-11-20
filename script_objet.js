const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

const postsDiv = document.getElementById('posts');

for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
`;
    postsDiv.appendChild(postDiv);
}
