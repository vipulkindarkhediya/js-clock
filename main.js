let a;
let date;
let time;
let seconds;
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString();
  seconds = String(a.getSeconds()).padStart(2, "0");
  time = a.getHours() + ":" + a.getMinutes() + ":" + seconds;
  document.getElementById("time").innerHTML = date + " " + time;
}, 1000);
