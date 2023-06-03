var working = false;
var second = 0;
var minute = 0;
var hour = 0;

function start_timer() {
    setTimeout(start_timer, 1000);
    if (working) {
        work_timer()
    };
};

function work_timer() {
    if (second < 59) {
        second += 1;
    } else {
        if (minute < 59) {
            minute += 1;
        } else {
            hour += 1;
            minute = 0;
        };
        second = 0;
    };

    document.getElementById('second').innerHTML = add_zero(second);
    document.getElementById('minute').innerHTML = add_zero(minute);
    document.getElementById('hour').innerHTML = add_zero(hour);
};

function reset() {
    working = false;
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById('second').innerHTML = add_zero(second);
    document.getElementById('minute').innerHTML = add_zero(minute);
    document.getElementById('hour').innerHTML = add_zero(hour);
    // button start_stop should be start
    document.getElementById('start_stop').innerHTML="start"
};
function start_stop() {
    let button_start_stop = document.getElementById('start_stop');
    if (working) {
        button_start_stop.innerHTML="start"
    } else {
        button_start_stop.innerHTML="stop"
    };
    working = !working
};

function add_zero(number) {
    if (number < 10) {
        return "0" + number
    };
    return number;
};
