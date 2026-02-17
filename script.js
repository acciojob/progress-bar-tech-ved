//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");

let currentActive = 1;

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circle.active");

  const progressPercent =
    ((actives.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = progressPercent + "%";

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// initial state
update();

