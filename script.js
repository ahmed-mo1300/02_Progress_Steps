// From DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// START
let currentActive = 1;

// Steps ++
next.addEventListener("click", () => {
  currentActive += 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  console.log(currentActive);

  update();
});

// Steps --
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  console.log(currentActive);

  update();
});

function update() {
  // add active class
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // calculate percentage
  const actives = document.querySelectorAll(".active");
  // we deleted 1 cuz length > index && index start with 0
  let percentage = ((actives.length - 1) / (circles.length - 1)) * 100;
  console.log(percentage);
  progress.style.width = percentage + "%";

  //   edit buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// .forEach(FUNCTION || ARROW FUNCTION)
