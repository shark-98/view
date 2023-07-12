const getStart = () => {
  return document.getElementById('starsRef')
}

const starsCount = 800; //星星数量
const distance = 900; //间距

const createStars = () => {
  const startDom = getStart()

  for (let i = 0; i < starsCount; i++) {
    const div = document.createElement('div')
    div.className = 'star'

    let speed = 0.2 + Math.random() * 1;
    let thisDistance = distance + Math.random() * 300;

    div.style.transformOrigin = `0 0 ${thisDistance}px`;

    div.style.transform = `
      translate3d(0,0,-${thisDistance}px)
      rotateY(${Math.random() * 360}deg)
      rotateX(${Math.random() * -50}deg)
      scale(${speed},${speed})`;

    startDom.appendChild(div)
  }
}

const init = () => {
  createStars()
}

window.onload = () => {
  init()
}
