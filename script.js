const square = document.getElementById('square');
const button = document.getElementById('changeColorButton');

button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    square.style.backgroundColor = randomColor;
});

