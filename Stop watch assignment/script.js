document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Connected");

  let timer = null;
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  const display = document.getElementById("display");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  function updateDisplay() {
    display.innerText =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  startBtn.addEventListener("click", () => {
    if (timer) return;

    timer = setInterval(() => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 1000);
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
  });
});