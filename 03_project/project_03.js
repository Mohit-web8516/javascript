
// const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// setInterval(function () {
//   let date = new Date();
  // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
function updateDigitalClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format with leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("digitalClock").textContent = timeString;
}

// Update every second
setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // initial call



