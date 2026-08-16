document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbClose = document.getElementById("lightbox-close");
  var galleryLinks = document.querySelectorAll(".gallery a[data-full]");

  galleryLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (lightbox && lbImg) {
        lbImg.src = link.getAttribute("data-full");
        lightbox.classList.add("open");
      }
    });
  });

  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lightbox) lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLb();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLb();
  });

  function closeLb() {
    if (lightbox) lightbox.classList.remove("open");
  }

  window.openNav = function openNav(address) {
    var q = encodeURIComponent(address);
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    var url = isIOS
      ? "http://maps.apple.com/?q=" + q
      : "https://www.google.com/maps/search/?api=1&query=" + q;
    window.open(url, "_blank");
    return false;
  };
});