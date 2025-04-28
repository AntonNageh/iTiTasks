let video = document.getElementById("video");
let play = document.getElementById("play");
let mute = document.getElementById("mute");
let vol = document.getElementById("vol");
let speed = document.getElementById("speed");
let time = document.getElementById("time");
let volume = document.getElementById("volume");

const playVideo = () => {
    video.paused? (video.play(), play.innerHTML = "Pause"): (video.pause(), play.innerHTML = "Play");
}
const muteVideo = () => {
    video.muted = !video.muted;
    mute.innerHTML = video.muted ? "Unmute" : "Mute";
}

const changeDuration = () => {
    video.currentTime = vol.value;
}
video.addEventListener("timeupdate", () => {
    vol.value = video.currentTime;
    time.innerHTML = `${Math.floor(video.currentTime / 60)}:${Math.floor(video.currentTime % 60)}/${Math.floor(video.duration / 60)}:${Math.floor(video.duration % 60)}`;
    volume.value = video.volume * 100;
})

const changeSpeed = () => {
    video.playbackRate = speed.value;
}
const FastBackward = () => {
    video.currentTime -= 10;
}
const FastForward = () => {
    video.currentTime += 10;
}

const SlowBackward = () => {
    video.currentTime -= 5;
}
const SlowForward = () => {
    video.currentTime += 5;
}

const changeVolume = () => {
    video.volume = volume.value / 100;
}

volume.addEventListener("input", changeVolume);
vol.addEventListener("input", changeDuration);
speed.addEventListener("input", changeSpeed);