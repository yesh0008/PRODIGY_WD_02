let h = 0;
let m = 0;
let s = 0;
let fh;
let fm;
let fs;

var lap = [];

let startBtn = document.getElementById("start");
let lapBtn = document.getElementById("lapbtn");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let timer;

startBtn.addEventListener("click", () => {
  timer = true;
  //For the first second to wait
  setTimeout(() => {
    start();
  }, 1000);
  
  lapDiv.classList.remove("hidden");
  resetDiv.classList.remove("hidden");
  pauseDiv.classList.remove("hidden");
  startDiv.classList.add("hidden");
});

lapBtn.addEventListener("click", () => {
  timer = true;
  lap.push(fh + ":" + fm + ":" + fs);
  function print(arr) {
    let el = "";
    for (let i = 0; i < arr.length; i++) {
      el += `<li class="text">${arr[i]}</li>`;
    }
    return el;
  }
  document.getElementById("lap").innerHTML = `
  <h1 class="l">Laps</h1>
  <ol>
  ${print(lap)}
  </ol>`;
});

pauseBtn.addEventListener("click", () => {
  timer = false;
  startDiv.classList.remove("hidden");
  pauseDiv.classList.add("hidden");
});

resetBtn.addEventListener("click", () => {
  timer = false;
  document.getElementById("hh").innerHTML = "00";
  document.getElementById("mm").innerHTML = "00";
  document.getElementById("ss").innerHTML = "00";
  lapDiv.classList.add("hidden");
  resetDiv.classList.add("hidden");
  pauseDiv.classList.add("hidden");
  startDiv.classList.remove("hidden");
  h = 0;
  m = 0;
  s = 0;
  lap = [];
  document.getElementById("lap").innerHTML = ``;
});

function start() {
  if (timer) {
    if (s < 60) {
      s++;
    } else {
      s = 0;
      m += 1;
    }
    if (m < 60) {
    } else {
      m = 0;
      h += 1;
    }
    fh = h;
    fm = m;
    fs = s;

    if (fh < 10) {
      fh = "0" + fh;
    }
    if (fm < 10) {
      fm = "0" + fm;
    }
    if (fs < 10) {
      fs = "0" + fs;
    }

    document.getElementById("hh").innerHTML = fh;
    document.getElementById("mm").innerHTML = fm;
    document.getElementById("ss").innerHTML = fs;

    setTimeout(start, 1000);
  }
}
