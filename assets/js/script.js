let boxOne = document.querySelector("#box-1");
let boxTwo = document.querySelector("#box-2");
let boxThree = document.querySelector('#box-3');
let menuBtn = document.querySelector('.menu-btn');
let mainBoard = document.querySelector('.game-menu');
let colorBoard = document.querySelector('.color-div');
let colorOptions = document.querySelector('.color-btn');
let boxes = document.querySelectorAll('.box');
const borderChange = (activeBox) => {
    for (let box of boxes) {
        if (box !== activeBox) {
            box.classList.remove('active');
        }
    }
    activeBox.classList.add('active');
};
colorOptions.addEventListener('click', () => {
    mainBoard.style.display = 'none'; ('box');
    colorBoard.style.display = 'flex';

});
menuBtn.addEventListener('click', () => {
    colorBoard.style.display = 'none';
    mainBoard.style.display = 'flex';
});
boxOne.addEventListener('click', () => {
    mainBoard.style.backgroundColor = ' #fca311';
    document.body.style.backgroundColor = ' #ffcdb2';
    colorBoard.style.backgroundColor = '#fca311';
    borderChange(boxOne);
    // boxOne.style.border = '2px dotted #ffffff';
});
boxTwo.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#e76f51';
    document.body.style.backgroundColor = '#cdb4db';
    colorBoard.style.backgroundColor = '#e76f51';
    borderChange(boxTwo);
    // boxTwo.style.border = '1px dotted #ffffff';
});
boxThree.addEventListener('click', () => {
    mainBoard.style.backgroundColor = '#bb3e03';
    document.body.style.backgroundColor = '#ffd670';
    colorBoard.style.backgroundColor = '#bb3e03';
    borderChange(boxThree);
    // boxThree.style.border = '2px dotted #ffffff';
});


