// autoplay sound
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
  let bgSound = document.getElementById("myAudio");
  bgSound.play();

  // stop microphone stream acquired by getUserMedia
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
});

// selecting DOM elements
const circleProgress = document.querySelector(".circle-progress");
const numOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");

// breaths remaining
let breathsLeft = 3;

// Watching for number of breaths selection change
numOfBreaths.addEventListener("change", function (e) {
  breathsLeft = numOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// Grow/Shrink circle

const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions

const breatheTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breathe In";
  setTimeout(() => {
    instructions.innerText = "Hold Your Breath";
    setTimeout(() => {
      instructions.innerText = "Exhale Slowly";
    }, 4000);
  }, 4000);
};

// Breathing App function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText =
        "Ok great job! , how do you feel?, relaxed ?. Click begin to start a new session";
      start.classList.remove("button-inactive");
      breathsLeft = numOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    } else {
      growCircle();
      breatheTextUpdate();
    }
  }, 12000);
};

// start breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed and ready to begin the breathing exercise";
  setTimeout(() => {
    instructions.innerText = "Ok exercise is starting...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breatheTextUpdate();
    }, 2000);
  }, 2000);
});
