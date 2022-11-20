async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

const postsDiv = document.getElementById('posts');

(async () => {
    const posts = await getPosts();
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
        postsDiv.appendChild(postDiv);
    }
})();
