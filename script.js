'use strict';


// //basics of dom
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let ans = Math.trunc(Math.random()*20)+1;
// console.log(ans);
// document.querySelector('.number').textContent = ans;

let score = 20;
let highscore = 0;
let prevHighscore = 0;


// event listeners


//check-button

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '😕Please enter a Number!';
    }
    else if(guess === ans){
        document.querySelector('.message').textContent = '🥳 Congratulations!!!';
        document.querySelector('.number').textContent = ans;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30 rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // document.querySelector('.highscore').textContent = highscore;
    }
    else if(guess > ans){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '🥲 You Lost.';
            document.querySelector('.score').textContent = 0;
        }
        
    }
    else if(guess < ans){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '🥲 You Lost.';
            document.querySelector('.score').textContent = 0;
        }
        
    }
});


document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    ans = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem';


});