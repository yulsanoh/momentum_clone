function getClock() {
  const date = new Date();
  // const hour = String(date.getHours()).padStart(2, "0");
  let hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");

  if(hour > 12) {
    hour = String(hour % 12); 
    const clockText = `오후 ${hour}:${min}`; 
    clock.innerText = clockText;
  } else {
    hour = String(hour);
    const clockText = `오전 ${hour}:${min}`; 
    clock.innerText = clockText;
  }
}

getClock();
setInterval(getClock, 1000);
