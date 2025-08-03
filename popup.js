document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const closePopupButton = document.querySelector("#close-popup");
  
    closePopupButton.addEventListener("click", function () {
      popupOverlay.style.display = "none";
      
    });
  });
  
  document.getElementById(
    'close-popup').addEventListener('click', (e) => {
        document.getElementById(
            'popup-overlay').style.visibility = "hidden";
        window.location.reload();
    });