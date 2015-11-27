var interval;
var minutes = 30;
var seconds = 0;
window.onload = function() {
    countdown('countdown');
}

function countdown(element) {
    interval = setInterval(function() {
        var el = document.getElementById(element);
        if(seconds == 0) {
            if(minutes == 0) {
                el.innerHTML = "Time is up";
                clearInterval(interval);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }
        if(minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }
        var second_text = seconds > 1 ? 'seconds' : 'second';
        el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
        seconds--;
    }, 1000);
}
