function getClock() {
  const date = new Date();
  let hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");
  let ampm = hour >= 12 ? "오후" : "오전";
  
  ampm = hour === 24 ? "오전" : ampm;
  hour = hour % 12;
  hour = hour ? hour : 12;

  const clockText = `${ampm} ${hour}:${min}`; 
  clock.innerText = clockText;
}

getClock();
setInterval(getClock, 1000);
