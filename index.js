function roll() {
    var result = Math.floor(Math.random() * 6) + 1;
    return result;
}

function play() {
    var playerResults = [roll(), roll()];
    var dices = document.querySelectorAll(".dice");
    var heading = document.querySelector("h1");

    if (playerResults[0] == playerResults[1]) {
        heading.innerHTML = "Draw!";
    }
    else if (playerResults[0] > playerResults[1]) {
        heading.innerHTML = "Player 1 Wins!"
    }
    else {
        heading.innerHTML = "Player 2 Wins!"
    }

    for (var i = 0; i < dices.length; ++i) {
        dices[i].getElementsByTagName("img")[0].setAttribute("src", "images/dice" + playerResults[i] + ".png");
    }
}

var button = document.getElementById("Play");
button.onclick = function () {
    play();
}


