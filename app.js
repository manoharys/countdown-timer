const endDate = document.querySelector('input[name="endDate"]');

const clock = document.querySelector('.clock');


// adding eventListener whenever the changes made to the input..

endDate.addEventListener('change', (e) => {
    // console.log(endDate.value);
    let temp = new Date(endDate.value);
    // console.log(temp);
    // let k=(endClock(temp));
    //console.log(startClock(temp));
    startClock(temp);

});

function startClock(d) {
    let timeLeft = endClock(d);
    //console.log(timeLeft.days);
    for (let pro in timeLeft) {
        console.log(pro, timeLeft[pro]);
        let element = document.querySelector("." + pro);
        if (element) {
            console.log(element);
            element.innerHTML = timeLeft[pro] + "    ";
        }
    }
}

function endClock(d) {
    let currentDate = new Date();
    // console.log(currentDate);
    // console.log(Date.parse(currentDate));
    //console.log(Date.parse(d));
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