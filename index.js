const mapResult = ['rock', 'paper', 'scissors'];
let myResult;
let computerResult;
let win = 0, loss = 0, tie = 0;
let IsAutoPlay = false;
let intervalId;

function moveRock() {
    myResult = 0;
    computerResult = Math.floor(Math.random() * 3);
    judge();
}

function movePaper() {
    myResult = 1;
    computerResult = Math.floor(Math.random() * 3);
    judge();
}

function moveScissors() {
    myResult = 2;
    computerResult = Math.floor(Math.random() * 3);
    judge();
}

function judge() {
    const resultObj = document.querySelector('.result');
    const myResultObj = document.getElementById('my-result');
    const computerResultObj = document.getElementById('computer-result');
    changeMoveImg(myResult, myResultObj);
    changeMoveImg(computerResult, computerResultObj);
    if (myResult === computerResult) {
        tie++;
        resultObj.innerHTML = 'Tie.';
        document.getElementById('tie-count').innerHTML = tie;
    } else if (computerResult === (myResult + 2) % 3) {
        win++;
        resultObj.innerHTML = 'Win.';
        document.getElementById('win-count').innerHTML = win;
    } else {
        loss++;
        resultObj.innerHTML = 'Loss.';
        document.getElementById('loss-count').innerHTML = loss;
    }
}

function changeMoveImg(result, obj) {
    if (result === 0) {
        obj.src = 'rock-emoji.png';
    } else if (result === 1) {
        obj.src = 'paper-emoji.png';
    } else {
        obj.src = 'scissors-emoji.png';
    }
}

function reset() {
    tie = 0;
    win = 0;
    loss = 0;
    document.getElementById('loss-count').innerHTML = loss;
    document.getElementById('win-count').innerHTML = win;
    document.getElementById('tie-count').innerHTML = tie;
}

function autoPlay() {
    const autoPlayObj = document.querySelector('.auto-play');
    if (!IsAutoPlay) {
        IsAutoPlay = true;
        autoPlayObj.innerHTML = 'Stop Auto Play';
        intervalId = setInterval(function() {
            myResult = Math.floor(Math.random() * 3);
            computerResult = Math.floor(Math.random() * 3);
            judge();
        }, 2000);
    } else {
        IsAutoPlay = false;
        autoPlayObj.innerHTML = 'Auto Play';
        clearInterval(intervalId);
    }
}
