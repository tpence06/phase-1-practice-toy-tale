  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

const BASE_URL = "http://localhost:3000/toys"

fetch(BASE_URL)
  .then(res => res.json())
  .then(toys => {
    let toysHTML = toys.map(function() {
    return `
    <div class="card">
      <h2>${toys.name}</h2>
      <img src=${toys.image} class="toy-avatar" />
      <p>${toys.likes} Likes </p>
      <button class="like-btn" id="[toy_id]">Like ❤️</button>
    </div>
    `
  })
 document.querySelector('#toy-collection').innerHTML =toysHTML
  })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

