const input = document.getElementById("searchInput");
const result = document.getElementById("result");

// Fake API Call
function fetchData(query) {
  console.log("API Call : ", query);

  result.innerHTML = `Searching For: <b>${query}</b>`;
}

// Debounce Function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debounceSearch = debounce(fetchData, 1000);

// Input Event
input.addEventListener("input", (e) => {
  debounceSearch(e.target.value);
});
