const videoId = 'video-id'

function getVideoDom () {
  return document.querySelector(`#${videoId}`)
}

function initMediaDevices (video) {
  const options = {
    video: true,
    audio: false,
  }
  navigator.mediaDevices.getUserMedia(options)
    .then((stream) => {
      if (!video) return

      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((e) => console.log(e));
}

function init () {
  window.onload = () => {
    const videoDom = getVideoDom();
    initMediaDevices(videoDom)
  }
}

init()
