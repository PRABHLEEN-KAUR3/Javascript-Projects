const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let rgbColor = "rgb(";
    let x = getRandNumber(0, 256);
    let y = getRandNumber(0, 256);
    const z = getRandNumber(0, 256);

    color.textContent = rgbColor +  x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = rgbColor + x + "," + y + "," + z + ")";
}); 

const getRandomNumber = () => {
    return Math.floor(Math.random() * (max - min) + min);
}