const audio = document.getElementById("my-audio");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.remove("paused");
    playPauseButton.classList.add("playing");
  } else {
    audio.pause();
    playPauseButton.classList.remove("playing");
    playPauseButton.classList.add("paused");
  }
});