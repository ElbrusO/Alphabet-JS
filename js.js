"use strict";

const boxes      = document.querySelectorAll('.boxes__box');                        //all items(boxes);
const headText   = document.querySelector('.header');                               //head text 
const audioClick = new Audio('audio/Mountain Audio - Menu Click.mp3');
const audioWin   = new Audio('audio/huge win.wav');
let continueGame = true;
let tryClicker = 1;

boxes.forEach(function(box) {                                                       // check all boxes
    box.addEventListener('click', function () {                                     // check click on box
        if(continueGame) {                                                          // check can game continue or not
            changeBoxPlace(box);                                                    // here function 
            jokeFunction();                                                         // realy joke 
            let checkPosition = document.querySelectorAll('.boxes__box')            // for write position all items
            checkWin(checkPosition);                                                // if all items get true function
        }
        else {
            alert('Обнови страницу чтоб начать')
        }
    });
});

function changeBoxPlace (box) {
    audioClick.play();
    if (box.previousElementSibling != null) {
        box.previousElementSibling.before(box);
    } else {
        box.nextElementSibling.after(box);
    }
}

function checkWin(pos) {
    if (pos[0].classList.contains('box_a') &&         // I think i can do it with - for(let i = 0; i < pos.length; i++) {}
        pos[1].classList.contains('box_b') &&         // and then                       pos[i].classList.contains(array[i])
        pos[2].classList.contains('box_c') &&         // So ofc i will make before the array = [box_a, box_b, box_c and etc..]
        pos[3].classList.contains('box_d') &&         // maybe should make new let checkTrue and checkTrue = pos[i].classLi....
        pos[4].classList.contains('box_e') &&         // and main let check += checTure;
        pos[5].classList.contains('box_f') &&         // Okay, once i will releae it
        pos[6].classList.contains('box_g') &&
        pos[7].classList.contains('box_h') &&
        pos[8].classList.contains('box_i') &&
        pos[9].classList.contains('box_j') &&
        pos[10].classList.contains('box_k') &&
        pos[11].classList.contains('box_l')) {
            if (tryClicker > 45) {
                headText.textContent = 'Зря не поверил в тебя хехе :P';
            } else {
                headText.textContent = 'Победитель';
            }
            audioWin.play();
            document.body.classList.toggle('playColor');
            document.body.classList.toggle('winColor');
            continueGame = false;
        }
}

function jokeFunction() {
    tryClicker += 1;
    console.log(tryClicker);
    if(tryClicker > 8) {
        headText.textContent = 'А ты шустрый)';
    }
    if(tryClicker > 20) {
        headText.textContent = 'Почти у цели..';
    }
    if(tryClicker > 30) {
        headText.textContent = 'У тебя получится!';
    }
    if(tryClicker > 36) {
        headText.textContent = 'Ну же...';
    }
    if(tryClicker > 45) {
        headText.textContent = 'Выучил бы алфавит прежде чем тут позорится :/';
    }
    
}