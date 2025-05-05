// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function () {
    const textElement = document.getElementById('text');
    textElement.textContent = 'You clicked the button! The text has changed.';
    textElement.style.color = 'green'; // Change style dynamically
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById('toggleBoxBtn').addEventListener('click', function () {
    const container = document.getElementById('box-container');
    const existingBox = document.querySelector('.box');
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);
    }
  });
  