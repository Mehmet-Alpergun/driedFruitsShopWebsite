// const carousel = document.querySelector(".carousel");
// const firstImg = carousel.querySelectorAll("img")[0];
// const arrowIcons = document.querySelectorAll(".about-us i");
// let firstImgWidt = firstImg.clientWidth + 20;

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidt : firstImgWidt;
//   });
// });
// const carousel = document.querySelector(".about-us");
// const firstImg = document.querySelectorAll("img")[0];
// const arrowIcons = document.querySelectorAll(".middle i");

// let firstImgWidt = firstImg.clientWidth + 20;

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     carousel.scrollLeft += icon.id == "left" ? -firstImg : firstImg;
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(".about-us");
//   const firstImg = document.querySelectorAll("img")[0];
//   const arrowIcons = document.querySelectorAll(".middle i");

//   let firstImgWidth = firstImg.clientWidth + 5;

//   arrowIcons.forEach((icon) => {
//     icon.addEventListener("click", () => {
//       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     });
//   });
// });

const carousel = document.querySelector(".about-us");
const firstImg = document.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".middle i");

let firstImgWidth = firstImg.clientWidth + 5;
let canScroll = true; // İlk tıklama sonrası kaydırma izni

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (canScroll) {
      canScroll = false; // Kaydırmayı devre dışı bırak
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => {
        canScroll = true; // Kaydırma iznini geri aç
      }, 500); // 500 milisaniye boyunca kaydırmayı devre dışı bırak
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
