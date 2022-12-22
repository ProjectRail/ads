const imageEl = document.getElementById("adBanner");
var adImages = new Array("/ads.gif", "/assets/kazakola.png", "/assets/mintysmintsmeth.png", "/assets/doodbikes.png");

window.setInterval(changePicture, 10000);
let i = 0;
function changePicture() {
  i++;
  if (i > adImages.length - 1) i = 0;
  imageEl.style.backgroundImage = `url(${adImages[i]})`;
}
