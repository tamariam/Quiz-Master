//get elements//
let boxOne = document.querySelector("#box-1");
let boxTwo = document.querySelector("#box-2");
let boxThree = document.querySelector('#box-3');
let menuBtn = document.querySelector('.colors-menu');
let mainMenuBtn = document.querySelector('.menubtn-btn');
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
let nextBtns = document.querySelectorAll('.next-btn');
let plusScore = document.querySelector('.plus-score');
let minusScore = document.querySelector('.minus-score');
const resumeDiv = document.querySelector('.resume-div');
const resumeBtn = document.querySelector('.resume-btn');
const restartBtn = document.querySelector('.restart-btn');
const correctResult = document.querySelector('.correct-result');
const incorrectResult = document.querySelector('.incorrect-result');
const noChoice = document.querySelector('.no-choice');

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
            playDiv.style.height = '50%';

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
    gameBoard.style.display = 'none';
    // colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';


});
//create function goToGameBoard amd we will use this function to go gameBoard when user clicks one of the btns from music movie or sport//
const goToGameBoard = () => {
    gameBoard.style.display = 'flex';
    mainBoard.style.display = 'none';


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

mainMenuBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        gameBoard.style.display = 'none';
        colorBoard.style.display = 'none';
        mainBoard.style.display = 'flex';

        playDiv.style.display = 'block';

        playGameDiv.style.display = 'none';
        resumeDiv.style.display = 'flex';
    } else {
        gameBoard.style.display = 'none';
        colorBoard.style.display = 'none';
        mainBoard.style.display = 'flex';
        questionWindow.style, display = 'flex';



    }





});
restartBtn.addEventListener('click', () => {
    playDiv.style.display = 'none';
    resumeDiv.style.display = 'none';
    playerName.textContent = '';
    userName.value = "";
    score = 0;
    noScore = 0;
    plusScore.innerHTML = score;
    minusScore.innerHTML = noScore;
    currentQuestionIndex = 0;
    questionWindow.style.display = 'block';

    getQuestion();
});
resumeBtn.addEventListener('click', () => {
    resumeDiv.style.display = 'none';
    playGameDiv.style.display = 'block';
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
let currentQuestionIndex = 0;
let score = 0;
let noScore = 0;
let choiceAttempt = 0;


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



const getQuestion = () => {
    let currentQuestion = sportQuestions[currentQuestionIndex];
    question.textContent = currentQuestion.question;

    //make sure previos choices not display//
    choiceAttempt = 0;
    choices.innerHTML = '';
    //create  choicelist//
    for (let choice of currentQuestion.choices) {
        let choiceList = document.createElement('span');
        choiceList.classList.add('choice-btns');
        choiceList.textContent = choice;
        choices.appendChild(choiceList);
        choiceList.addEventListener('click', (event) => {
            const usersChoice = event.target.textContent;
            const choiceTarget = usersChoice.charAt(0);
            if (choiceAttempt < 1) {
                if (choiceTarget === currentQuestion.correctAnswer) {
                    correctResult.style.display = 'block';
                    event.target.style.color = 'green';
                    score++;
                    plusScore.innerHTML = score;
                    choiceAttempt++;
                } else {
                    incorrectResult.style.display = 'block';
                    event.target.style.color = 'red';
                    noScore++;
                    minusScore.innerHTML = noScore;
                    choiceAttempt++;
                }
            } else if (choiceAttempt >= 1) {
                correctResult.style.display = 'none';
                incorrectResult.style.display = 'none';
                noChoice.style.display = 'block';
            }

        });



    }
};
getQuestion();


//this function checks if there is questions left or not//
const checkIfFinished = () => {
    if (currentQuestionIndex === sportQuestions.length) {
        alert('finished');

    }

};
//next btn//
for (let nextBtn of nextBtns) {
    nextBtn.addEventListener('click', () => {

        currentQuestionIndex++;
        correctResult.style.display = 'none';
        incorrectResult.style.display = 'none';
        noChoice.style.display = 'none';
        checkIfFinished();
        getQuestion();
    });
};