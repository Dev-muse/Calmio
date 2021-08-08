// autoplay sound chrome
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
  let bgSound = document.getElementById("myAudio");
  bgSound.play();

  // stop microphone stream acquired by getUserMedia
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
});
