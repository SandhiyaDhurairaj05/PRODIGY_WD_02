let timer;
let seconds = 0;

function updateTime() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('time').textContent = `${hrs}:${mins}:${secs}`;

  // Animate circular timer
  const percentage = (seconds % 60) * 6; // 360° / 60
  document.querySelector('.timer-circle').style.background = 
    `conic-gradient(#4caf50 0deg ${percentage}deg, #ddd ${percentage}deg 360deg)`;
}

document.getElementById('start').onclick = () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  }
};

document.getElementById('pause').onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById('reset').onclick = () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTime();
  document.getElementById('laps').innerHTML = '';
};
