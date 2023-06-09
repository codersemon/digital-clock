const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const ampmDoc = document.querySelector('.ampm');

function digitalClock() {
  const dateObj = new Date();
  let hourNow = dateObj.getHours();
  let minNow = dateObj.getMinutes();
  let secNow = dateObj.getSeconds();

  //   Convert 12 hours format
  let ampm = (hourNow > 12) ? "PM" : "AM";
  hourNow = (hourNow % 12) || 12;

  hour.innerHTML = hourNow.toString().padStart(2, 0);
  min.innerHTML = minNow.toString().padStart(2, 0);
  sec.innerHTML = secNow.toString().padStart(2, 0);
  ampmDoc.innerHTML = ampm;
}
digitalClock();
setInterval(digitalClock, 1000);
