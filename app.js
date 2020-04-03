const endDate = document.querySelector('input[name="endDate"]');
console.log(endDate);
const clock = document.querySelector('.clock');
//console.log(clock);

// adding eventListener whenever the changes made to the input..

endDate.addEventListener('change', (e) => {
    console.log(endDate.value);
    let temp = new Date(endDate.value);
    console.log(temp);
});