const video = document.getElementById("bgVideo");
const btn = document.getElementById("toggleBtn");
const toggle = btn.children
console.log(toggle)
btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
} else {
    video.pause();
}
toggle[0].classList.toggle("active")
toggle[1].classList.toggle("active")
});