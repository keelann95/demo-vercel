const url = "http://localhost:3030/movies";

//add shortcut functions
function createAnElement(element) {
  return document.createElement(element);
}

function addText(element, text) {
  return (element.innerText = text);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

function select(selector) {
  return document.querySelector(selector);
}

function appendChild(child, parent) {
  return parent.appendChild(child);
}

function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}

function removeAttribute(element, attribute) {
  return element.removeAttribute(attribute);
}

const Cards = select(".cards");

listen(document, "DOMContentLoaded", () => {
  fetchData(url);
});
//seeting up the top movies
function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elm) => {
        let { title, year, genres, thumbnail, trailer } = elm;
        const card = createAnElement("a");
        card.classList.add("card");
        card.href = trailer;
        card.innerHTML = `
                    <img src="${thumbnail}" alt="${title}" class="poster">
                    <div class="movieCont">
                        <h4>${title}</h4>
                        <div class="sub">
                            <p>${genres}, ${year}</p>
                            <h3><span>IMBD</span><i class="fa-solid fa-star"></i>7.8 </h3>
                        </div>
                    </div>
                `;
        appendChild(card, Cards);
      });
    });
}

listen(document, "DOMContentLoaded", () => {
  function watch() {
    const watch = select(".btns");
    watch.addEventListener("click", () => {
      alert("Click the movies below to watch the each trailer");
    });
  }
  watch();

  function mouseHover(params) {
    const nav = select(".homeActive");

    nav.addEventListener("mouseover", (item) => {
      alert("Ooop! you cant redirect on this project");
    });
  }
  mouseHover();
});
