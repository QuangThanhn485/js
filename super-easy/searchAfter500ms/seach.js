let timer = null;
function searchOptions(value) {
  setInterval(() => {
    let text = document.getElementById("text").value;
    document.getElementById("output").innerHTML = text.search(value);
  }, 500);
}

let search = document.querySelector(".search");
search.addEventListener("keyup", function () {
  searchOptions(this.value);
});
