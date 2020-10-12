/* Inputs */

const categoriasButton = document.getElementById('categoriasButton');
const productosButton = document.getElementById('productosButton');
const contactoButton = document.getElementById('contactoButton');
const categoriasDropdown = document.getElementById('categoriasDropdown');
const productosDropdown = document.getElementById('productosDropdown');
const contactoDropdown = document.getElementById('contactoDropdown');
const images = document.getElementsByClassName('mySlides');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const dots = document.querySelectorAll('.dot');

/* Functions */

/* NavBar */
const toggleDropdownClass = (dropdown1, dropdown2, dropdown3) => {
  if (dropdown1.className === 'dropdown') {
    dropdown1.className = 'showDropdown';
    dropdown2.className = 'dropdown';
    dropdown3.className = 'dropdown';
  } else {
    dropdown1.className = 'dropdown'
  }
}

categoriasButton.addEventListener('click', function () {
  toggleDropdownClass(categoriasDropdown, productosDropdown, contactoDropdown);
});

productosButton.addEventListener('click', function () {
  toggleDropdownClass(productosDropdown, categoriasDropdown, contactoDropdown);
});

contactoButton.addEventListener('click', function () {
  toggleDropdownClass(contactoDropdown, categoriasDropdown, productosDropdown);
});

window.onclick = function (event) {
  if (!event.target.matches('#categoriasButton') && 
  !event.target.matches('#productosButton') && 
  !event.target.matches('#contactoButton')) {
    const dropdown = document.querySelector('.showDropdown');
    if (dropdown !== null) {
      dropdown.className = 'dropdown';
    }
  }
}

/* Slider */
let slideIndex = 1;
const timeLapse = 5000;

const showImage = (imageIndex) => {
  if (imageIndex > images.length) {
    slideIndex = 1;
  }
  if (imageIndex < 1) {
    slideIndex = images.length;
  }

  for (let img of images) {
    img.style.display = 'none';
  }

  for (let dt of dots) {
    dt.className = dt.className.replace(' dotSelected', '');
  }

  images[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' dotSelected';
}

const timer = () => {
    showImage(slideIndex += 1);
};

let timerSlide = setInterval(timer, timeLapse);

arrowLeft.addEventListener('click', function () {
  showImage(slideIndex -= 1);
  clearInterval(timerSlide);
  timerSlide = setInterval(timer, timeLapse);
});

arrowRight.addEventListener('click', function () {
  showImage(slideIndex += 1);
  clearInterval(timerSlide);
  timerSlide = setInterval(timer, timeLapse);
});

dots.forEach(dot => dot.addEventListener('click', function () {
  slideIndex = dot.id;
  showImage(slideIndex);
  clearInterval(timerSlide);
  timerSlide = setInterval(timer, timeLapse);
}));

showImage(slideIndex);