// let slideIndex = 1;
// let nIntervId;

// function displaySlides(n) {
//   let slides = document.getElementsByClassName('showSlide');
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slides[slideIndex - 1].style.display = 'block';
// }

// function nextSlide(n) {
//   slideIndex +=n;
//   console.log(slideIndex);
//   displaySlides(slideIndex);
// }

// function currentSlide(n) {
//   displaySlides(slideIndex = n);
// }

// function autoSlide() {
//   if (slideIndex < 3) {
//     slideIndex += 1;
//   } else {
//     slideIndex = 0;
//   }
//   console.log(slideIndex);
//   displaySlides(slideIndex);
// }

// nIntervId = setInterval(autoSlide, 4000);

// displaySlides(slideIndex);

// function useragentLogger() {
//   console.log(window.navigator.userAgent);
// }

// useragentLogger();