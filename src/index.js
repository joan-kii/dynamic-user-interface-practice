/* Inputs */

const categoriasButton = document.getElementById('categoriasButton');
const productosButton = document.getElementById('productosButton');
const contactoButton = document.getElementById('contactoButton');
const categoriasDropdown = document.getElementById('categoriasDropdown');
const productosDropdown = document.getElementById('productosDropdown');
const contactoDropdown = document.getElementById('contactoDropdown');

/* Functions */

const toggleClass = (dropdown1, dropdown2, dropdown3) => {
  if (dropdown1.className === 'dropdown') {
    dropdown1.className = 'showDropdown';
    dropdown2.className = 'dropdown';
    dropdown3.className = 'dropdown';
  } else {
    dropdown1.className = 'dropdown'
  }
}

categoriasButton.addEventListener('click', function () {
  toggleClass(categoriasDropdown, productosDropdown, contactoDropdown);
});

productosButton.addEventListener('click', function () {
  toggleClass(productosDropdown, categoriasDropdown, contactoDropdown);
});

contactoButton.addEventListener('click', function () {
  toggleClass(contactoDropdown, categoriasDropdown, productosDropdown);
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