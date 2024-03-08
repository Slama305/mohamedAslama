function toggleElement(elementId) {
    var allElements = document.querySelectorAll('.showens, .hiddens');

    allElements.forEach(function(element) {
      element.style.display = 'none';
    });

    var selectedElement = document.getElementById(elementId);
    selectedElement.style.display = 'block';
}

function addBorder(clickedElement) {
   
    var allElements = document.querySelectorAll('.clickable-element');
    allElements.forEach(function(element) {
      element.classList.remove('selected-element');
    });

   
    clickedElement.classList.add('selected-element');
  }