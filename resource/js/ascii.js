var ANIMATIONS = { bike: BIKE, exercise: EXERCISE, dive: DIVE, juggler: JUGGLER, 'custom': CUSTOM };
var tv = document.getElementById('textarea');
var startbtn = document.getElementById('start');
var stopbtn = document.getElementById('stop')
startbtn.onclick = function() { start() };
stopbtn.onclick = function() { stop() };
var lists;
var current = 0,
    end;
timer = null;
var speed = 250;
var custom = false;
document.getElementById('speed').onchange = function() {
    if (this.checked) speed = 50;
    else speed = 250;
    stop();
    start();
}
document.getElementById('size').onchange = function() {
    tv.style.fontSize = this.value + "pt";

}

document.getElementById('animation').onchange = function() {
    stop();
    tv.value = "";
    if (this.value === 'custom') {
        custom = true;
    } else {
        lists = ANIMATIONS[this.value].split('=====');
        custom = false;

    }
    if (!custom) config();
}


function config() {
    current = 0;
    end = lists.length;
    if (end > 0)
        set();
    else stop();
}

function set() {
    tv.value = lists[current];
    if (current + 1 > end - 1) current = 0;
    else current++;
}

function start() {
    if (custom) {
        lists = tv.value.split('=====');
        config();
        custom = false;

    }
    timer = setInterval(set, speed);
    startbtn.disabled = true;
    stopbtn.disabled = false;
}

function stop() {
    if (timer != null) {

        clearInterval(timer);
        timer = null;
    }
    startbtn.disabled = false;
    stopbtn.disabled = true;
}