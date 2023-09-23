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
const finished = document.querySelector('.finished');
const finishedText = document.querySelector('.finished-text');
let currentQuestionIndex = 0;
let currentMusicIndex = 0;
let currentMovieIndex = 0;
let score = 0;
let noScore = 0;
let choiceAttempt = 0;

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
        playDiv.style.height = '350px';
        question.style.display = 'block';
        choices.style.display = 'flex';



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
            playDiv.style.height = '450px';
            question.style.display = 'block';
            choices.style.display = 'flex';

        }
    }
});
// when user clicks yes,new div will open where user should create username//
yesBtn.addEventListener('click', () => {
    userScoresDiv.style.visibility = 'visible';
    questionWindow.style.display = 'none';
    playDiv.style.display = 'flex';
    form.style.display = 'flex';
    question.style.display = 'none';
    choices.style.display = 'none';


});
noBtn.addEventListener('click', () => {
    gameBoard.style.display = 'none';
    // colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';


});
//create function goToGameBoard amd we will use this function to go gameBoard when user clicks one of the btns from music movie or sport//

// sportBtn.addEventListener('click', goToGameBoard);
// musicBtn.addEventListener('click', goToGameBoard);
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

    gameBoard.style.display = 'none';
    // colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';
    userName.value = '';
    playDiv.style.display = 'none';
    playDiv.style.height = '200px';
    noChoice.style.display = 'none';

    playGameDiv.style.display = 'block';
    correctResult.style.display = 'none';
    incorrectResult.style.display = 'none';
    finished.style.display = 'none';
    questionWindow.style.display = 'block';












});


// resumeBtn.addEventListener('click', () => {
//     resumeDiv.style.display = 'none';
//     playGameDiv.style.display = 'block';
//     console.log('clicked');
//     if (currentCategory === sportQuestions) {

//         getSportQuestion();

//     } else if (currentCategory === musicQuestions) {

//         getMusicQuestion();

//     } else if (currentCategory === movieQuestions) {

//         getMovieQuestion();

//     }
// });
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

const movieQuestions = [
    {
        question: "Which movie features the character Jack Dawson and Rose DeWitt Bukater?",
        choices: ["a) Titanic", "b) The Shawshank Redemption", "c) Jurassic Park"],
        correctAnswer: "a"
    },
    {
        question: "Who played the iconic role of Neo in the Matrix series?",
        choices: ["a) Keanu Reeves", "b) Tom Hanks", "c) Leonardo DiCaprio"],
        correctAnswer: "a"
    },
    {
        question: "In which film does a young wizard attend Hogwarts School of Witchcraft and Wizardry?",
        choices: ["a) The Hobbit", "b) Harry Potter", "c) E.T. the Extra-Terrestrial"],
        correctAnswer: "b"
    },
    {
        question: "Who directed the 1975 thriller film 'Jaws'?",
        choices: ["a) George Lucas", "b) Alfred Hitchcock", "c) Steven Spielberg"],
        correctAnswer: "c"
    },
    {
        question: "What is the name of the AI computer system in the movie '2001: A Space Odyssey'?",
        choices: ["a) HAL 9000", "b) R2-D2", "c) C-3PO"],
        correctAnswer: "a"
    },
    {
        question: "In which film did Heath Ledger portray the Joker?",
        choices: ["a) Batman Begins", "b) The Dark Knight", "c) Suicide Squad"],
        correctAnswer: "b"
    },
    {
        question: "What Pixar film features the adventures of Woody and Buzz Lightyear?",
        choices: ["a) Finding Nemo", "b) Toy Story", "c) The Incredibles"],
        correctAnswer: "b"
    },
    {
        question: "Who played the role of Katniss Everdeen in 'The Hunger Games' film series?",
        choices: ["a) Emma Watson", "b) Jennifer Aniston", "c) Jennifer Lawrence"],
        correctAnswer: "c"
    },
    {
        question: "Which movie is known for the line, 'You can't handle the truth!'?",
        choices: ["a) A Few Good Men", "b) Saving Private Ryan", "c) Apollo 13"],
        correctAnswer: "a"
    },
    {
        question: "In the film 'Forrest Gump,' what famous phrase does Forrest often say?",
        choices: ["a) 'I'm the king of the world!'", "b) 'May the Force be with you.'", "c) 'Life is like a box of chocolates.'"],
        correctAnswer: "c"
    }
];

const musicQuestions = [
    {
        question: "Which British rock band released the album 'The Dark Side of the Moon' in 1973?",
        choices: ["c) The Beatles", "b) Led Zeppelin", "c) Pink Floyd"],
        correctAnswer: "c"
    },
    {
        question: "Who is often referred to as the 'King of Pop'?",
        choices: ["c) Elvis Presley", "b) Michael Jackson", "c) Prince"],
        correctAnswer: "b"
    },
    {
        question: "Which legendary guitarist is known for his rendition of 'The Star-Spangled Banner' at Woodstock in 1969?",
        choices: ["a) Jimi Hendrix", "b) Eric Clapton", "c) Jimmy Page"],
        correctAnswer: "a"
    },
    {
        question: "Who is known for the hit song 'Billie Jean'?",
        choices: ["a) Madonna", "b) Whitney Houston", "c) Michael Jackson "],
        correctAnswer: "c"
    },
    {
        question: "Which famous rapper's real name is Marshall Bruce Mathers III?",
        choices: ["a) Jay-Z", "b) Kanye West", "c) Eminem"],
        correctAnswer: "c"
    },
    {
        question: "What music genre is characterized by its use of turntables, sampling, and rapping?",
        choices: ["a) Jazz", "b) Rock", "c) Hip-hop"],
        correctAnswer: "c"
    },
    {
        question: "Which iconic pop group consisted of John Lennon, Paul McCartney, George Harrison, and Ringo Starr?",
        choices: ["a) The Beach Boys", "b) The Rolling Stones", "c) The Beatles"],
        correctAnswer: "c"
    },
    {
        question: "Who released the album 'Rumours' in 1977, featuring hits like 'Go Your Own Way' and 'Dreams'?",
        choices: ["a) Fleetwood Mac", "b) The Eagles", "c) The Doors"],
        correctAnswer: "a"
    },
    {
        question: "Which female artist is known for her album 'Back to Black' and hits like 'Rehab' and 'Valerie'?",
        choices: ["a) Adele", "b) Beyoncé", "c) Amy Winehouse"],
        correctAnswer: "c"
    },
    {
        question: "What legendary musician played a guitar known as 'Lucille' and is famous for his blues music?",
        choices: ["a) B.B. King", "b) Buddy Guy", "c) Eric Clapton"],
        correctAnswer: "a"
    }
];
let currentCategory = sportQuestions;

const checkIfFinished = () => {
    question.style.display = 'none';
    choices.style.display = 'none';
    finished.style.display = 'block';
    if (currentQuestionIndex === sportQuestions.length) {
        finishedText.textContent = `Game Finished! Thanks for playing. you answered ${score} answers correctly`;

    } else if (currentMusicIndex === musicQuestions.length) {
        finishedText.textContent = `Game Finished! Thanks for playing. you answered ${score} answers correctly`;
    } else if (currentMovieIndex === movieQuestions.length) {
        finishedText.textContent = `Game Finished! Thanks for playing. you answered ${score} answers correctly`;
    }

};

const getSportQuestion = () => {

    if (currentQuestionIndex < sportQuestions.length) {
        let currentQuestion = sportQuestions[currentQuestionIndex];
        // console.log(currentQuestion.choices);
        question.textContent = currentQuestion.question;
        currentCategory = sportQuestions;
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
                        event.target.style.color = '#9a031e';
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
    } else {
        checkIfFinished();
    }

};
getSportQuestion();
const getMovieQuestion = () => {

    if (currentMovieIndex < movieQuestions.length) {
        let currentQuestion = movieQuestions[currentMovieIndex];
        // console.log(currentQuestion.choices);
        question.textContent = currentQuestion.question;
        currentCategory = movieQuestions;
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
                        event.target.style.color = '#9a031e';
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

    } else {
        checkIfFinished();
    }
};

getMovieQuestion();

const getMusicQuestion = () => {

    if (currentMusicIndex < musicQuestions.length) {
        let currentQuestion = musicQuestions[currentMusicIndex];
        // console.log(currentQuestion.choices);
        question.textContent = currentQuestion.question;
        currentCategory = musicQuestions;
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
                        event.target.style.color = '#9a031e';
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
    } else {
        checkIfFinished();
    }
};

getMusicQuestion();


restartBtn.addEventListener('click', () => {
    playDiv.style.display = 'none';
    // resumeDiv.style.display = 'none';
    playerName.textContent = '';
    userName.value = "";
    score = 0;
    noScore = 0;
    plusScore.innerHTML = score;
    minusScore.innerHTML = noScore;
    playDiv.style.height = '30%';
    // currentQuestionIndex = 0;
    // currentMusicIndex = 0;
    // currentMovieIndex = 0;
    questionWindow.style.display = 'block';
    finished.style.display = 'none';
    choiceAttempt = 0;
    if (currentCategory === sportQuestions) {
        currentQuestionIndex = 0;
        getSportQuestion();
        console.log(sportQuestions);
    } else if (currentCategory === musicQuestions) {
        currentMusicIndex = 0;
        getMusicQuestion();

        console.log(musicQuestions);
    } else if (currentCategory === movieQuestions) {
        currentMovieIndex = 0;
        getMovieQuestion();
    }


});

musicBtn.addEventListener('click', () => {
    currentQuestionIndex = 10;
    currentMovieIndex = 10;
    currentMusicIndex = 0;
    score = 0;
    noScore = 0;
    plusScore.innerHTML = score;
    minusScore.innerHTML = noScore;
    playerName.textContent = userName.value;
    gameBoard.style.display = 'flex';
    mainBoard.style.display = 'none';
    getMusicQuestion();
});
movieBtn.addEventListener('click', () => {
    currentQuestionIndex = 10;
    currentMusicIndex = 10;
    currentMovieIndex = 0;
    score = 0;
    noScore = 0;
    plusScore.innerHTML = score;
    minusScore.innerHTML = noScore;
    playerName.textContent = userName.value;
    gameBoard.style.display = 'flex';
    mainBoard.style.display = 'none';
    getMovieQuestion();
});
sportBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    currentMusicIndex = 10;
    currentMovieIndex = 10;
    score = 0;
    noScore = 0;
    plusScore.innerHTML = score;
    minusScore.innerHTML = noScore;
    playerName.textContent = userName.value;
    gameBoard.style.display = 'flex';
    mainBoard.style.display = 'none';
    getSportQuestion();
});
//this function checks if there is questions left or not//

//next btn//
for (let nextBtn of nextBtns) {
    nextBtn.addEventListener('click', () => {

        correctResult.style.display = 'none';
        incorrectResult.style.display = 'none';
        noChoice.style.display = 'none';

        if (currentQuestionIndex < sportQuestions.length) {
            currentQuestionIndex++;
            getSportQuestion();
        } else if (currentMovieIndex < movieQuestions.length) {
            currentMovieIndex++;
            getMovieQuestion();
        } else if (currentMusicIndex < musicQuestions.length) {
            currentMusicIndex++;
            getMusicQuestion();
        }
        else {
            checkIfFinished();
        }
    });
};
