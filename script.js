const postsDiv = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
            postsDiv.appendChild(postDiv);
        }
    });
