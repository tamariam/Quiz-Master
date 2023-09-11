//get elements//
let boxOne = document.querySelector("#box-1");
let boxTwo = document.querySelector("#box-2");
let boxThree = document.querySelector('#box-3');
let menuBtn = document.querySelector('.colors-menu');
let sportMenuBtn = document.querySelector('.menubtn-btn');
let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');
let mainBoard = document.querySelector('.game-menu');
let colorBoard = document.querySelector('.color-div');
let colorOptions = document.querySelector('.color-btn');
let boxes = document.querySelectorAll('.box');
let sportBtn = document.querySelector('.sport-btn');
let sportBoard = document.querySelector('.main-div');
let userScoresDiv = document.querySelector('.user-score');
let questionWindow = document.querySelector('.question-window');
let playDiv = document.querySelector('.play-div');
let userName = document.querySelector('#username');
let form = document.querySelector('#form');
let startGameBtn = document.querySelector('.start-game-btn');
let playerName = document.querySelector('#player-name');
let movieBtn = document.querySelector('.movie-btn');
let musicBtn = document.querySelector('.music-btn');

// when user clicks this btn,if it will update player name,also if there is no value inserted it will notify user//
startGameBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (userName.value === '') {
        userName.style.border = '1px solid red';
    } else {
        form.style.display = 'none';
        let newPlayerName = userName.value;
        playerName.textContent = newPlayerName;

    }
});
// same functionality as startGameBtn//
userName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        if (userName.value === '') {

            userName.style.border = '1px solid red';
        } else {
            form.style.display = 'none';
            let newPlayerName = userName.value;
            playerName.textContent = newPlayerName;

        }
    }
});
// when user clicks yes,new div will open where user should create username//
yesBtn.addEventListener('click', () => {
    userScoresDiv.style.visibility = 'visible';
    questionWindow.style.display = 'none';
    playDiv.style.display = 'block';
    form.style.display = 'flex';
});
noBtn.addEventListener('click', () => {
    sportBoard.style.display = 'none';
    // colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';


});
movieBtn.addEventListener('click', () => {
    mainBoard.style.display = 'none';
    sportBoard.style.display = 'flex';
});
sportBtn.addEventListener('click', () => {
    mainBoard.style.display = 'none';
    sportBoard.style.display = 'flex';

});
musicBtn.addEventListener('click', () => {
    mainBoard.style.display = 'none';
    sportBoard.style.display = 'flex';
});
//this function changes border, to  color div boxes when click//
const borderChange = (activeBox) => {
    for (let box of boxes) {
        if (box !== activeBox) {
            box.classList.remove('active');
        }
    }
    activeBox.classList.add('active');
};
//add eventlistener to colorOptions , when user press colorOptions btn on mainBoard, mainBoard disapaears and colorBoard displays.//
colorOptions.addEventListener('click', () => {
    mainBoard.style.display = 'none';
    colorBoard.style.display = 'flex';

});
//  when user click menuBtn ,mainBoard will display and colorBoard disapears//
menuBtn.addEventListener('click', () => {
    sportBoard.style.display = 'none';
    colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';
    playDiv.style.display = 'none';

});

sportMenuBtn.addEventListener('click', () => {
    sportBoard.style.display = 'none';
    colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';
    questionWindow.style.display = 'block';
    playDiv.style.display = 'none';
    playerName.textContent = '';
    userName.value = "";



});
//add eventListeners to boxes to change color//
boxOne.addEventListener('click', () => {
    mainBoard.style.backgroundColor = ' #fca311';
    document.body.style.backgroundColor = ' #ffcdb2';
    colorBoard.style.backgroundColor = '#fca311';
    sportBoard.style.backgroundColor = '#fca311';
    borderChange(boxOne);

});
boxTwo.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#e76f51';
    document.body.style.backgroundColor = '#cdb4db';
    colorBoard.style.backgroundColor = '#e76f51';
    sportBoard.style.backgroundColor = '#e76f51';
    borderChange(boxTwo);
});
boxThree.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#bb3e03';
    document.body.style.backgroundColor = '#ffd670';
    colorBoard.style.backgroundColor = '#bb3e03';
    sportBoard.style.backgroundColor = '#bb3e03';
    borderChange(boxThree);

});


