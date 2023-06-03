var hour_24 = true

function start_time() {
    const now = new Date()

    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();

    if (!hour_24 && hour>12) {
        hour = hour-12
    }

    second = add_zero(second)
    minute = add_zero(minute)
    hour = add_zero(hour)

    document.getElementById('second').innerHTML = second
    document.getElementById('minute').innerHTML = minute
    document.getElementById('hour').innerHTML = hour
    setTimeout(start_time, 1000)
}

function add_zero(number) {
    if (number < 10) {
        return "0" + number
    }
    return number
}
