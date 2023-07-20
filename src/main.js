alert("overlay active")
//init overlay
var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

//get official overlay
function updateImage() {
    overlayImage.src = "https://place.army/overlay_target.png?" + Date.now()
}



//update timer
setInterval(function () {
  overlayImage.src = "https://place.army/overlay_target.png?" + Date.now()
  alert("update complete")
}, 3000);
