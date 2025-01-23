//타이머함수
//일정시간마다 반복하는 setInterval
//setInterval(실행함수, 실행시간)
//const 타이머변수 = setInterval(실행함수, 실행시간)
let num = 5;
const timerDiv = document.querySelector('.timer');
const timer1 = setInterval(function(){
    //console.log('timer'+num)
    timerDiv.textContent = num
    num--;
    //if(num == 0) window.location.href = './index.html';
    // timerDiv.innerText = num
}, 1000);

console.log('===========================')
//애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머 
const boxAni = document.querySelector('.box');
const box_timer = document.querySelector('.box_timer');
let box_num = 0;

let timer2 = setInterval(timerFunc, 1000)
function timerFunc(){
    box_num++;
    box_timer.innerText = `진행시간 : ${box_num}초`
}

//stop버튼 클릭 시 진행시간, 애니메이션이 모두 정지(paused)
const stopBtn = document.querySelector('#stop');
//replay버튼 클릭 시 진행시간, 애니메이션 다시 재생(running)
const replayBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer2)
    //boxAni.style.animation = 'none';
    boxAni.style.animationPlayState = 'paused';
})
replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'running';
    timer2 = setInterval(timerFunc, 1000)
})

//한 글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');

const timer3 = setInterval(writer, 200);
function writer(){
    if(i <= text.length){
        if(i==9) textSpan.innerHTML += '<br>'
        textSpan.innerHTML += text.charAt(i);
        i++;
        console.log(i, text.charAt(i))
    }
}
writer() //함수호출