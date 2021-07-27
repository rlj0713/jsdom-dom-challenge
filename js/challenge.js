// Timer increments
const counter = document.querySelector("#counter")

const incrementNum = () => {
    if(!isPaused) {
        let num = parseInt(counter.innerText) + 1
        counter.innerText = num;
    }
};

const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1;
    counter.innerText = num;
};

const startTimer = () => {
    setInterval(incrementNum, 1000);
};

document.addEventListener("DOMContentLoaded", startTimer);


// + / - Buttons increment or decrement the timer
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");

const incrementClick = (event) => {
    event.preventDefault();
    incrementNum();
}

const decrementClick = (event) => {
    event.preventDefault();
    decrementNum();
}

plusButton.addEventListener("click", incrementNum);
minusButton.addEventListener("click", decrementNum);

// Like Button
const likesUl = document.querySelector(".likes");

const heartBtn = document.querySelector("#heart");


const addLike = (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    let content = `${counter.innerText} likes`
    li.innerText = content;
    likesUl.append(li);
};

heartBtn.addEventListener("click", addLike)


// Pause Button
let isPaused = false

const pauseBtn = document.querySelector("#pause");

const buttons = [plusButton, minusButton, heartBtn]

const pauseCounter = () => {
    if (isPaused) {
        isPaused = false;
        pauseBtn.innerText = "pause";
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
    } else {
        isPaused = true;
        pauseBtn.innerText = "resume";
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
        setTimeOut (startTimer, 1000);
    }
};

pauseBtn.addEventListener("click", pauseCounter);

// Comment Functionality
const submitBtn = document.querySelector("#submit");

const createComment = (event) => {
    event.preventDefault();
    const listDiv = document.querySelector("#list");
    const paraEle = document.createElement("p");
    const content = submitBtn.parentNode.comment.value
    paraEle.innerText = content
    listDiv.appendChild(paraEle);
    submitBtn.parentNode.comment.value = "";
}

submitBtn.addEventListener("click", createComment);