const api = "5CcBNwOUPzmr8RgqXI63fLjIt8ZjZMZhItVYZjOGkis";
const text = document.querySelector("#text");
const form = document.querySelector("form");
const search_results = document.querySelector(".results");
const show_more = document.querySelector("#showmore");

let inputData = "";
let page = 1;

async function searchImage() {
    inputData = text.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        search_results.innerHTML = "";
    }
    results.map(function (result) {
        const imagewrap = document.createElement("div");
        imagewrap.classList.add("result");
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description;
        const anchor = document.createElement("a");
        anchor.href = result.links.html;
        anchor.target = "_blank";
        anchor.textContent = result.alt_description;

        imagewrap.appendChild(img);
        imagewrap.appendChild(anchor);
        search_results.appendChild(imagewrap);
    });
    page++;
    if (page > 1) {
        show_more.style.display = "block";
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    page = 1;
    searchImage();
});
show_more.addEventListener("click", function () {
    searchImage();
});


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("click", () => {
    document.body.classList.toggle("dark")
  })