const exit = document.getElementsByClassName("exit")[0];
const board = document.getElementsByClassName("board")[0];
const clickrandom = document.getElementsByClassName("printrandom")[0];
const submitNum = document.getElementsByClassName("submitNum")[0];
const resetbtn = document.getElementsByClassName("reset")[0];

// random함수 최소,최대 값 정해주기
const min = 0;
const max = 100;

// 랜덤 함수
const randomNum = Math.random() * 100;
const randomNumFloor = Math.floor(randomNum);

// 나가기 버튼
function onClickexit() {
    location.href = "file:///C:/code/js/All-Game/src/html/index.html";
}


// 숫자 프린트
function print() {
    console.log(randomNumFloor);
    board.innerText = "1~100\n사이의 수";
}

// 초기화 함수
function reset() {
    location.reload();
}

// 숫자 비교
function comparison() {
    console.log(submitNum.value); // 램덤 숫자 확인

    if (randomNumFloor > submitNum.value) {
        board.innerText = "UP!";
    } else if (randomNumFloor == submitNum.value) {
        board.innerText = "정답!";
    } else 
        board.innerText = "DOWN!";
}

clickrandom.addEventListener('click', print);
exit.addEventListener('click', onClickexit);
resetbtn.addEventListener('click', reset);