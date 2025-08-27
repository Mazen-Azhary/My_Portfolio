const resumeButton = document.getElementById("resumeButton");
resumeButton.onclick = function() {
    window.open("https://flowcv.com/resume/b0vasvff1d", "_blank");
}


const graduationTimer = document.getElementById("graduationTimer");
const targetDate = new Date("2027-06-26T00:00:00");
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
// Ensure photo2 height matches photo1 height
photo2.style.height = window.getComputedStyle(photo1).height;
photo2.style.width = window.getComputedStyle(photo1).width;