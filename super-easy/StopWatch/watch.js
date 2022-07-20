let statuss = true;
let hour = 00;
let minute = 00;
let second = 00;
let Intervalid;
function start() {
  Intervalid = setInterval(() => {
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }
    document.getElementById("time").innerHTML =
      hour + " : " + minute + " : " + second;
  }, 1000);
}
function stop() {
  clearInterval(Intervalid);
}
function reset() {
  clearInterval(Intervalid);
  hour = 00;
  minute = 00;
  second = 00;
  document.getElementById("time").innerHTML =
    hour + " : " + minute + " : " + second;
}
