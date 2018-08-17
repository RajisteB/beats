var open = false;
var droppedHighlights = false;
var droppedSpecs = false;
var sidebar = document.querySelector('#side-bar');
var icon = document.querySelector('#icon');
var searchbar = document.querySelector('#search-icon');
var selections = document.querySelectorAll('.select h3');
var selectedColorImg = document.getElementById('headphones-select');
var dropdown = document.querySelectorAll('.dropdown');

function handleDropDown(index) {
  if (index === 0) {
    droppedHighlights = !droppedHighlights;
  } else if (index === 1 ) {
    droppedSpecs = !droppedSpecs;
  }
  console.log('droppedHighlights: ' + droppedHighlights);
  console.log('droppedSpecs: ' + droppedSpecs);

  if (droppedHighlights || droppedSpecs) {
    dropdown[index].style.padding = '5px 0px 10px 25px'
    dropdown[index].style.height = '1000px';
    dropdown[index].style.opacity = 1;
  } else {
    dropdown[index].style.padding = '0px';
    dropdown[index].style.height = '0px';
    dropdown[index].style.opacity = 0;
  }
}

function handleColorChange(index) {
  switch(selections[index].innerHTML) {
    case 'Gloss Black':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-v4.png)';
      break;
    case 'Gloss White':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-gloss-white.png)';
      break;
    case 'Rose Gold':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-rose-gold.png)';
      break;
    case 'Black':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-v4.png)';
      break;
    case 'Gold':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-gold.png)';
      break;
    case 'Silver':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-silver.png)';
      break;
    case 'Ultra Violet':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-ultraviolet.png)';
      break;
    case 'Red':
      selectedColorImg.style.backgroundImage = 'url(./images/beats-red.png)';
      break;
    default:
      selectedColorImg.style.backgroundImage = 'url(./images/beats-v4.png)';
  }
}

function expandSearch() {
  open = !open;
  if (open) {
    anime({
      targets: searchbar,
      opacity: 1,
      width: '200px',
      duration: 500,
      easing: 'linear'
    });
  } else {
    anime({
      targets: searchbar,
      opacity: 0,
      width: '0px',
      duration: 500,
      easing: 'linear'
    })
  }
}
function expandSidebar() {
  anime({
    targets: sidebar,
    translateX: -250,
    easing: 'easeInOutQuad',
  });
}
function closeSidebar() {
  anime({
    targets: sidebar,
    translateX: 250,
    easing: 'easeInOutQuad',
  });
}


