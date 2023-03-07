const balls = document.getElementsByClassName('ball');
console.log(balls);

document.onmousemove = (event) => {
  const xPosition = (event.clientX * 100) / window.innerWidth + '%';
  const yPosition = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = xPosition;
    balls[i].style.top = yPosition;
    balls[i].transform = 'translate(-' + xPosition + ',-' + yPosition + ')';
  }
};