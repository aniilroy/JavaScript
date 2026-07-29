'use strict'
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent= 21;
document.querySelector('.guess').value = 17;*/
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='🚫 No number, write the gussing number.'
    }
    else if(guess===22){
    document.querySelector('.message').textContent='🎉 Correct number!'}
    else{
        document.querySelector('.message').textContent='😿 Try again, Best luck next time..'
    }
    });