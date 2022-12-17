const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
    mario.classList.remove('jump'); 
    },500)
}

const loop = setInterval(() => {
    console.log('loop')

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);

    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation ='none'
        pipe.style.left = '${pipePosition}px';

        mario.style.animation ='none'
        mario.style.bottom = '${marioPosition}px';
        mario.src='./img/game-over.png';
        mario.style.width='75px'
        mario.style.margInLeft='50px'
        
        clearInterval(loop);
        alert("GAME - OVER");
    } 
},10);

document.addEventListener('keydown', jump);