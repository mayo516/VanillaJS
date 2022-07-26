const time = document.querySelector('div');



function clock() {
    
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const second = date.getSeconds();

    const currentTime = `${hour}:${min}:${second}`
    console.log(currentTime);
    time.innerText = currentTime;
    setInterval(this, 1000);
}

function timeGoingOn() {
    clock();
    setInterval( clock, 1000);
}

timeGoingOn()