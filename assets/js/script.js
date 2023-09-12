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
let gameBoard = document.querySelector('.main-div');
let userScoresDiv = document.querySelector('.user-score');
let questionWindow = document.querySelector('.question-window');
let playDiv = document.querySelector('.play-div');
let userName = document.querySelector('#username');
let form = document.querySelector('#form');
let startGameBtn = document.querySelector('.start-game-btn');
let playerName = document.querySelector('#player-name');
let movieBtn = document.querySelector('.movie-btn');
let musicBtn = document.querySelector('.music-btn');
let playGameDiv = document.querySelector('.play-game');
let question = document.querySelector('.question');
let choices = document.querySelector('.choices');

// when user clicks this btn,if it will update player name,also if there is no value inserted it will notify user//
startGameBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (userName.value === '') {
        userName.style.border = '1px solid red';
    } else {
        form.style.display = 'none';
        let newPlayerName = userName.value;
        playerName.textContent = newPlayerName;
        playGameDiv.style.display = 'block';

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
            playGameDiv.style.display = 'block';

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
//create function goToGameBoard amd we will use this function to go gameBoard when user clicks one of the btns from music movie or sport//
const goToGameBoard = () => {
    mainBoard.style.display = 'none';
    gameBoard.style.display = 'flex';
};
movieBtn.addEventListener('click', goToGameBoard);
sportBtn.addEventListener('click', goToGameBoard);
musicBtn.addEventListener('click', goToGameBoard);
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
    gameBoard.style.display = 'none';
    colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';
    playDiv.style.display = 'none';

});

sportMenuBtn.addEventListener('click', () => {
    gameBoard.style.display = 'none';
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
    gameBoard.style.backgroundColor = '#fca311';
    borderChange(boxOne);

});
boxTwo.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#e76f51';
    document.body.style.backgroundColor = '#cdb4db';
    colorBoard.style.backgroundColor = '#e76f51';
    gameBoard.style.backgroundColor = '#e76f51';
    borderChange(boxTwo);
});
boxThree.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#bb3e03';
    document.body.style.backgroundColor = '#ffd670';
    colorBoard.style.backgroundColor = '#bb3e03';
    gameBoard.style.backgroundColor = '#bb3e03';
    borderChange(boxThree);

});
///// MAIN GAIM LOGIC////
// //SPORT//
const sportQuestions = [
    {
        question: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        choices: ["a) Lionel Messi", "b) Cristiano Ronaldo", "c) Just Fontaine"],
        correctAnswer: "c"
    },
    {
        question: "In which sport would you perform a slam dunk?",
        choices: ["a) Tennis", "b) Basketball", "c) Golf"],
        correctAnswer: "b"
    },
    {
        question: "Which country won the most gold medals in the 2016 Summer Olympics?",
        choices: ["a) United States", "b) China", "c) Russia"],
        correctAnswer: "a"
    },
    {
        question: "What is the diameter of a standard basketball hoop in inches?",
        choices: ["a) 16 inches", "b) 18 inches", "c) 20 inches"],
        correctAnswer: "b"
    },
    {
        question: "Who is often referred to as 'The Greatest' in the world of boxing?",
        choices: ["a) Mike Tyson", "b) Muhammad Ali", "c) Floyd Mayweather"],
        correctAnswer: "b"
    },
    {
        question: "In which year did the first modern Olympic Games take place?",
        choices: ["a) 1886", "b) 1900", "c) 1896"],
        correctAnswer: "c"
    },
    {
        question: "What is the national sport of Japan?",
        choices: ["a) Judo", "b) Sumo wrestling", "c) Karate"],
        correctAnswer: "b"
    },
    {
        question: "Which team has won the most Super Bowl championships in NFL history?",
        choices: ["a) San Francisco 49ers", "b) New England Patriots", "c) Pittsburgh Steelers"],
        correctAnswer: "b"
    },
    {
        question: "What is the distance of a marathon race in kilometers?",
        choices: ["a) 26.2 kilometers", "b) 42.2 kilometers", "c) 50 kilometers"],
        correctAnswer: "a"
    },
    {
        question: "Who is the all-time leading scorer in the NBA?",
        choices: ["a) LeBron James", "b) Kobe Bryant", "c) Kareem Abdul-Jabbar"],
        correctAnswer: "c"
    }
];
let currentQuestionIndex = 0;
const getQuestion = () => {
    let currentQuestion = sportQuestions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    //make sure previos choices not display//
     for (let choice of currentQuestion.choices) {
         let choiceList = document.createElement('li');
         choiceList.textContent = choice;
         choices.appendChild(choiceList);
     }
 

};
getQuestion();