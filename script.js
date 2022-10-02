const form = document.querySelector('form');
const input = document.querySelector('input');
const modal = document.querySelector('.modal ');
const btnReset = document.querySelector('.btnReset');
const label = document.querySelector('label');
const span = document.querySelector('span');
const h4 = document.querySelector('h4');


let difficulty;
let random;
let timer = 30;
let heart = 5;
h4.innerText = timer;


function modalEasy(){
    difficulty = 'easy';
    modalClose()
}

function modalMedium(){
    difficulty = 'medium';
    modalClose()
}
function modalHard(){
    difficulty = 'hard';
    modalClose()
}



function randomNumber(){
    switch(difficulty){
        case 'easy' : return random = Math.floor(Math.random()*20+1);
        case 'medium' : return random = Math.floor(Math.random()*40+1);
        case 'hard' : return random = Math.floor(Math.random()*60+1);
    }
}


btnReset.addEventListener('click',()=>{
    window.location.reload();
})



function modalClose(){
        modal.style.display = 'none'
        switch(difficulty){
            case 'easy' : label.innerText = 'Choose a number between 1 and 20:';
            break;
            case 'medium' : label.innerText = 'Choose a number between 1 and 40:';
            break;
            case 'hard' : label.innerText = 'Choose a number between 1 and 60:';
            break;
        }
        console.log(randomNumber());
        timeOut();
}


function timeOut(){
   let t =  setInterval(()=>{
        timer --;
        h4.innerText = timer
        if(h4.innerText == 0){
            clearInterval(t)
            span.innerText = 'time is up';
            span.style.color = 'blue';
            input.setAttribute('disabled',true);
            btnReset.style.display = 'block'
        }else if(h4.className == 'stop'){
            clearInterval(t)
        }
    },1000)
}





form.addEventListener('submit', e=>{
    e.preventDefault();
    if(random == input.value){
         span.innerText = 'Well done, you guessed right😍😍😍😍🥇🏆🌹🎈🎁';
         span.style.color = 'lightgreen';
         input.setAttribute('disabled',true);
         h4.className = 'stop'
         btnReset.style.display = 'block'
    }else{
        --heart
        if(heart == 0){
            span.innerText = 'you lose😭😢'
            span.style.color = 'orange'
            input.setAttribute('disabled',true)
            btnReset.style.display = 'block'
            h4.className = 'stop'
        }else if(input.value < random){
            span.innerText = `Choose a larger number Remaining opportunity:${heart}`;
            span.style.color = 'red'
        }else if(input.value > random){
            span.innerText = `Choose a smaller number Remaining opportunity:${heart}`
            span.style.color = 'yellow'
        }

    }
    input.value = '';
    })




 