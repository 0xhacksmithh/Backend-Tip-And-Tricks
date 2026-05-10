const scrollText = document.getElementById("scrollText");

// Scroll handler
function updateScrollPosition() {
  console.log("Scroll Event Fired");
  scrollText.innerHTML = `Scroll Position: ${window.scrollY}`;
}

// Throttle Function
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

const throttledScroll = throttle(updateScrollPosition, 1000);

// Scroll Event
window.addEventListener("scroll", throttledScroll);
