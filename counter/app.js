let counter = 0;

const decBtn  = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const addBtn = document.getElementById('add-btn');

const checkCount = () => {
    if(counter < 0) document.getElementById('count').style.color = "red";
    else if(counter > 0) document.getElementById('count').style.color = "green";
    else document.getElementById('count').style.color = "black";
}
 


decBtn.addEventListener('click', function() {
    counter --;
    checkCount();
    document.getElementById('count').innerHTML = counter;
});

resetBtn.addEventListener('click', function(){
    counter = 0;
    checkCount();
    document.getElementById('count').innerHTML = counter;
});
addBtn.addEventListener('click', function(){
    counter++;
    checkCount();
    document.getElementById('count').innerHTML = counter;   
});


//METHOD-2
/*
decBtn.onclick = decreaseCount = () =>{
    counter -=1;
    document.getElementById('count').innerHTML = counter;
}

resetBtn.onclick = resetCount = () => {
    counter = 0;
    document.getElementById('count').innerHTML = counter;
}
addBtn.onclick = IncreaseCount = () => {
    counter +=1;
    document.getElementById('count').innerHTML = counter;
}

*/