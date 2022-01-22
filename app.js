import get from './js/getElement.js';

// Vars
const btn1 = get('#button1');
const btn2 = get('#button2');
const btn3 = get('#button3');
const outputDiv = get('#output');
const fetchHeading = get('.fetch-heading');

// Event Listener btn1
btn1.addEventListener('click', () => {
  getText();
});

// Event Listener btn2
btn2.addEventListener('click', () => {
  getJason();
});

// Event Listener btn3
btn3.addEventListener('click', () => {
  getExternal();
});

// Get Local Text File
function getText() {
  fetch('api/sample.txt')
    .then((response) => response.text())
    .then((data) => {
      fetchHeading.textContent = 'Connect To Txt File';
      const textArray = [data, data, data, data];
      const textData = textArray
        .map((text) => {
          return `
          <div>
          <p>${text}</p>
          </div>
          `;
        })
        .join('');
      outputDiv.innerHTML = textData;
    })
    .catch((err) => console.log(err));
}

// Get Local JSON File
function getJason() {
  fetch('api/posts.json')
    .then((response) => response.json())
    .then((data) => {
      fetchHeading.textContent = 'Connect To Json File';
      console.log(data);
      const titles = data
        .map((item) => {
          return `
          <div>
          <h4>${item.title}</h4>
          <p>${item.body}</p>
          </div>
          `;
        })
        .join('');
      outputDiv.innerHTML = titles;
    });
}

// Get From External API
function getExternal() {
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      fetchHeading.textContent = 'Connect To External API';

      const allUsers = data
        .map((user) => {
          console.log(user);
          return `
          <div>
          <h4>${user.login}</h4>
          <p>
          <a href="${user.html_url}" target="_blank">${user.login}'s Github
          </a>
          </p>
          </div>
          `;
        })
        .join('');
      console.log(allUsers);
      outputDiv.innerHTML = allUsers;
    });
}
