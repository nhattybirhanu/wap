"use strict"
var empty = 15;
var eX = 300,
    eY = 300;



$(document).ready(function() {

    setupgame();
});

function setupgame() {
    var order = shuffle();
    // order[order.indexOf[-1]] = order[order[15]];
    $("#puzzlearea").children("div").each(function(index, ele) {
        var i = order[index];
        if (i != -1) {
            createGrid(i, ele);

        } else {
            empty = index;

        }


    });
    createGrid(15, $("#puzzlearea").children("div")[empty]);


}

function createGrid(i, ele) {
    var x = ((i % 4) * 100);
    var y = (Math.floor(i / 4) * 100);

    // set basic style and background
    $(ele).addClass("puzzlepiece");

    var currentVal = $(ele).text() - 1;
    var xi = ((currentVal % 4) * 100);
    var yi = (Math.floor(currentVal / 4) * 100);


    $(ele).css({
        backgroundImage: 'url("resource/image/puzzle_background.jpg")',
        backgroundPosition: -xi + 'px ' + (-yi) + 'px',
        left: x + "px",
        top: y + "px",
    });

    // store x and y for later
    $(ele).data("x", x);
    $(ele).data("y", y);
    $(ele).off('mouseenter mouseleave')
    $(ele).hover(function() {

        if (canMove(ele))
            $(ele).toggleClass(canMove(ele) ? "movablepiece" : "puzzlepiece");

    });
    $(ele).off('click');

    $(ele).click(function() {
        if (canMove(ele)) {
            let le = empty;
            empty = i;
            $(ele).off('mouseenter mouseleave')
            $(ele).off('click');
            createGrid(le, ele);
        }


    });

    if (empty != null) {
        eX = ((empty % 4) * 100);
        eY = (Math.floor(empty / 4) * 100);

    }
    done();

}

function canMove(ele) {
    var move = false;
    for (let x = 0; x < 4; x++) {
        let newx = $(ele).data('x') + (x == 0 ? 100 : (x == 2 ? -100 : 0));
        let newy = $(ele).data('y') + (x == 1 ? 100 : (x == 3 ? -100 : 0));

        if (!move) move = newx == eX && newy == eY;

    }
    return move;
}


function shuffle() {
    var list = [
        14, 6, 11, 5, 13, 7, 10, 9, -1
    ];
    var tile = [
        0,
        1,
        2,
        3,
        4,
        genrateRandom(list),
        genrateRandom(list),
        genrateRandom(list),
        8,
        genrateRandom(list),
        genrateRandom(list),
        genrateRandom(list),
        12,
        genrateRandom(list),
        genrateRandom(list),
        genrateRandom(list),

    ];
    let ind = tile.indexOf(-1);
    let fifteen = tile[15];
    let indV = tile.indexOf(ind);
    tile[indV] = fifteen;
    tile[15] = ind;
    return tile;
}

function genrateRandom(list) {
    let ran = parseInt(Math.random() * list.length);
    var val = list[ran];
    list.splice(ran, 1);
    return val
}

function done() {
    var total = 0;
    var win = true;
    $("#puzzlearea").children("div").each(function(index, ele) {
        let currentVal = $(ele).text();
        console.log(currentVal + " " + total + win);
        if (total + 1 == currentVal) {
            total = total + currentVal;
        } else {
            win = false;
            return false;
        }

    });
    if (win) {
        alert("Greate you solved the puzzle!");
    }
}