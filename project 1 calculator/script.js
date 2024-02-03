window.alert("Use keyboard events only for numbers");

const display = document.querySelector(".display");
const button1 = document.querySelectorAll(".button");

button1.forEach((button) => {
button.addEventListener("click", (event) => {
    const value = event.target.dataset.value;

    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "C") {
      display.value = "";
    } else if (value === "D") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});
