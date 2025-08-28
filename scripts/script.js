const resumeButton = document.getElementById("resumeButton");
resumeButton.onclick = function () {
  window.open("https://flowcv.com/resume/b0vasvff1d", "_blank");
};

const graduationTimer = document.getElementById("graduationTimer");
const targetDate = new Date("2027-06-26T12:00:00");
function updateGraduationTimer() {
  let now = new Date();
  let diffMs = targetDate - now;
  let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  let diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  let diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
  let diffSeconds = Math.floor((diffMs / 1000) % 60);
  graduationTimer.innerHTML = `${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`; //literal (formatted string)
}

updateGraduationTimer();
setInterval(updateGraduationTimer, 1000); //call every second

let photo1 = document.getElementById("photoWd1");
let photo2 = document.getElementById("photoWd2");
let photo11 = document.getElementById("photoWd11");
let photo22 = document.getElementById("photoWd22");
// Ensure photo2 height matches photo1 height
photo2.style.height = window.getComputedStyle(photo1).height;
photo2.style.maxHeight = window.getComputedStyle(photo1).height;
photo22.style.height = window.getComputedStyle(photo11).height;
photo22.style.maxHeight = window.getComputedStyle(photo11).height;
window.addEventListener("resize", function handleZoom() {
  photo2.style.height = window.getComputedStyle(photo1).height;
  photo2.style.maxHeight = window.getComputedStyle(photo1).height;
  photo22.style.height = window.getComputedStyle(photo11).height;
  photo22.style.maxHeight = window.getComputedStyle(photo11).height;
});

const connectHubMedia = [
  "images/connectHub/0.mp4",
  "images/connectHub/1.jpg",
  "images/connectHub/2.jpg",
  "images/connectHub/3.jpg",
  "images/connectHub/4.jpg",
  "images/connectHub/5.jpg",
  "images/connectHub/6.jpg",
  "images/connectHub/7.jpg",
  "images/connectHub/8.mp4",
];
let connectHubIndex = 0;
const connectHubMediaDisplay = document.getElementById(
  "connectHubMediaDisplay"
);
const connectHubPrev = document.getElementById("connectHubPrev");
const connectHubNext = document.getElementById("connectHubNext");

function showConnectHubMedia(index) {
  const media = connectHubMedia[index];
  if (!media) return;

  let html = "";
  
  if (media.endsWith(".jpg") || media.endsWith(".png")) {
    html = `<img src="${media}" class="img-fluid" style="max-height:400px;max-width:100%" alt="ConnectHub Media">`;
  } 
  else {
    //video
    html = `<video src="${media}" controls class="w-100" style="max-height:400px;"></video>`;
  }
  connectHubMediaDisplay.innerHTML = html;
}

connectHubPrev.addEventListener("click", function () {
  connectHubIndex = (connectHubIndex-1 + connectHubMedia.length) % 9;
  showConnectHubMedia(connectHubIndex);
});
connectHubNext.addEventListener("click", function () {
  connectHubIndex = (connectHubIndex + 1) % 9;
  showConnectHubMedia(connectHubIndex);
});
if (connectHubMediaDisplay) {//start with media 0
  showConnectHubMedia(connectHubIndex);
}
