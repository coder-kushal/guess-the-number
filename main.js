let count = 0;
var myNum = Math.floor(Math.random() * 1000);
function checkGuess(event) {
    event.preventDefault();
    var guess = Number(document.getElementById("guess").value);
    count++;
    document.getElementById("count").innerHTML = count;
    if (guess === myNum) {
        document.getElementById("result").innerHTML = `Congrats, You got it in ${count} tries!`;
        document.getElementById("guess").disabled = true;
        document.getElementById("btn").disabled = true;
        document.getElementById("playBtn").classList.remove("hide");
        document.getElementById("btn").classList.add("hide");

    }
    else if (guess < myNum) {
        document.getElementById("result").innerHTML = "Try a greater one";
    }
    else {
        document.getElementById("result").innerHTML = "Try a smaller one";
    }
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}

function playAgain() {
    document.getElementById("guess").disabled = false;
    document.getElementById("btn").disabled = false;
    count = 0;
    document.getElementById("playBtn").classList.add("hide");
    document.getElementById("result").innerHTML = "Can You Guess it?";
    myNum = Math.floor(Math.random() * 1000);
    document.getElementById("count").innerHTML = count;
    document.getElementById("btn").classList.remove("hide");
    document.getElementById("guess").focus();
}