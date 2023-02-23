const audioBtn = document.getElementById('#audio');
const playBtn = document.querySelector("#play-btn").play() ={

};
const pauseBtn = document.querySelector("#pause-btn").pause();
let timerID;
const buttonPlay = document.getElementById("#play-btn");

buttonPlay.addEventListener("click", function(){
   timerID = setInterval(timerS, 1000);
    audioBtn.play();
});


const timer = 5;
let amountTime = timer * 60;

function timerS(){
    const countdown = document.querySelector(".counter");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
        amountTime = 0;
        stopTimer();
    }


}
  
// playBtn.addEventListener("click", startAudio()

// audio.oncanplaythrough = function(){
// audio.play();
// }

// audio.loop = true;

// audio.onended = function(){
// audio.play();
// }