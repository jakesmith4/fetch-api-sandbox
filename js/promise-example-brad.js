import get from './js/getElement.js';

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve(posts);
      } else {
        reject(new Error(`There was an error`));
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li style="color: red; background: #222; margin-top: 2rem;">${post.title}</li>`;
    });
    const container = get('.container');
    container.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then((posts) => getPosts())
  .catch((err) => console.log(err));
