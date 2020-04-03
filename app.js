const endDate = document.querySelector('input[name="endDate"]');

const clock = document.querySelector('.clock');

let timeInterval;
let stop = true;

//Adding localStorage functionality of js to retain the timer-count
let saved = localStorage.getItem("countdown") || false;
if (saved) {
    startClock(saved);
    let inputValue = new Date(saved);
    //console.log(inputValue);
    endDate.valueAsDate = inputValue;
}


// adding eventListener whenever the changes made to the input..

endDate.addEventListener('change', (e) => {
    // console.log(endDate.value);
    e.preventDefault();
    let temp = new Date(endDate.value);
    localStorage.setItem("countdown", temp)
    clearInterval(timeInterval);
    startClock(temp);
    stop = false;
});

function startClock(d) {
    function updateCounter() {
        let timeLeft = endClock(d);
        //console.log(timeLeft.days);
        //Time stops if the input date is zero or negative
        if (timeLeft.total <= 0) {
            stop = false;
        }
        for (let pro in timeLeft) {
            //console.log(pro, timeLeft[pro]);
            let element = document.querySelector("." + pro);
            if (element) {
                //console.log(element);
                element.innerHTML = timeLeft[pro] + "    ";
            }
        }
    }
    if (stop) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        stop = false;
        clearInterval(timeInterval);
    }
}

function endClock(d) {
    let currentDate = new Date();

    let t = Date.parse(d) - Date.parse(currentDate);
    //console.log(t);

    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}