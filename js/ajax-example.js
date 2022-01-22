const btn = document.querySelector('.btn');
const url = './api/people.json';
const xhr = new XMLHttpRequest();
const sectionCenter = document.querySelector('.section-center');

// Event Listener
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');
      console.log(displayData);
      const element = document.createElement('div');
      element.innerHTML = displayData;
      sectionCenter.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        readyState: xhr.readyState,
      });
    }
  };
  xhr.send();
}
