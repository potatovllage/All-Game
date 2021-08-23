const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 캔버스 크기
canvas.width = 350;
canvas.height = 550;

// 기본설정
let circleX = getRendom(100, 700);
let circleY = getRendom(250, 500);
let radius = 10;
const paddleHeight = 10;
const paddleWidth = 130;
const paddleX = (canvas.width-paddleWidth)/2;

// 공
function circle() {
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, Math.PI*2); // x좌표, y좌표, 원 반지름, 그리는 방향
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath(); // 공 그리기
}

// 패들
function paddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleWidth); // from x, from y, to x, to y 좌표
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// 벽돌 객체 생성
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: Math.floor(Math.random() * 3)};
        totalBricks += bricks[c][r].status;
    }
}

// 벽돌 그리기
function drawBricks() {
    
}


// 랜덤 함수
function getRendom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

circle();
paddle();