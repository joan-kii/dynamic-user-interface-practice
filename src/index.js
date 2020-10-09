/* Inputs */

const categoriasButton = document.getElementById('categoriasButton');
const productosButton = document.getElementById('productosButton');
const contactoButton = document.getElementById('contactoButton');
const categoriasDropdown = document.getElementById('categoriasDropdown');
const productosDropdown = document.getElementById('productosDropdown');
const contactoDropdown = document.getElementById('contactoDropdown');

/* Functions */

categoriasButton.addEventListener('click', function () {
  if (categoriasDropdown.className === 'dropdown') {
    categoriasDropdown.className = 'showDropdown';
    productosDropdown.className = 'dropdown';
    contactoDropdown.className = 'dropdown';
  } else {
    categoriasDropdown.className = 'dropdown';
  }
})

productosButton.addEventListener('click', function () {
  if (productosDropdown.className === 'dropdown') {
    productosDropdown.className = 'showDropdown';
    categoriasDropdown.className = 'dropdown';
    contactoDropdown.className = 'dropdown';
  } else {
    productosDropdown.className = 'dropdown';
  }
})

contactoButton.addEventListener('click', function () {
  if (contactoDropdown.className === 'dropdown') {
    contactoDropdown.className = 'showDropdown';
    categoriasDropdown.className = 'dropdown';
    productosDropdown.className = 'dropdown';
  } else {
    contactoDropdown.className = 'dropdown';
  }
})

window.onclick = function (event) {
  if (!event.target.matches(
      '#categoriasButton' || 
      '#productosButton' || 
      '#contactoButton'
      )) {
    const dropdowns = document.getElementsByClassName('showDropdown');
    console.log(dropdowns);
  }
}