// For Any Color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    function getRandNum(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    debugger;
    let x = getRandNum(0, 256);
    let y = getRandNum(0, 256);
    const z = getRandNum(0, 256);
    document.body.style.backgroundColor = "rgb" + "(" + x + "," + y + "," + z + ")";
    color.textContent = "rgb" + "(" + x + "," + y + "," + z + ")";
}); 