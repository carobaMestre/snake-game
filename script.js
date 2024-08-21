const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

const tileSize = 20;
const width = 400;
const height = 400;
let snake = [{ x: tileSize * 5, y: tileSize * 5 }];
let direction = { x: 0, y: 0 };
let food = {};
let score = 0;
let speed = 200;
let gameInterval;

canvas.width = width;
canvas.height = height;

document.addEventListener('keydown', changeDirection);
restartBtn.addEventListener('click', resetGame);

startGame();

function startGame() {
    resetGame();
    placeFood();
    gameInterval = setInterval(gameLoop, speed);
}

function resetGame() {
    snake = [{ x: tileSize * 5, y: tileSize * 5 }];
    direction = { x: 0, y: 0 };
    score = 0;
    speed = 200;
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
    scoreDisplay.textContent = 'Pontuação: ' + score;
}

function gameLoop() {
    moveSnake();
    if (checkCollision()) {
        clearInterval(gameInterval);
        alert('Fim de Jogo! Sua pontuação foi: ' + score);
    } else {
        if (eatFood()) {
            score++;
            speed = Math.max(50, speed - 5); // Aumenta a velocidade ao diminuir o intervalo
            clearInterval(gameInterval);
            gameInterval = setInterval(gameLoop, speed);
            scoreDisplay.textContent = 'Pontuação: ' + score;
            placeFood();
        }
        drawGame();
    }
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();
}

function changeDirection(event) {
    const keyPressed = event.key;
    const goingUp = direction.y === -tileSize;
    const goingDown = direction.y === tileSize;
    const goingRight = direction.x === tileSize;
    const goingLeft = direction.x === -tileSize;

    switch (keyPressed) {
        case 'ArrowUp':
            if (!goingDown) direction = { x: 0, y: -tileSize };
            break;
        case 'ArrowDown':
            if (!goingUp) direction = { x: 0, y: tileSize };
            break;
        case 'ArrowLeft':
            if (!goingRight) direction = { x: -tileSize, y: 0 };
            break;
        case 'ArrowRight':
            if (!goingLeft) direction = { x: tileSize, y: 0 };
            break;
    }
}

function checkCollision() {
    const head = snake[0];
    const hitWall = head.x < 0 || head.y < 0 || head.x >= width || head.y >= height;
    const hitSelf = snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);

    return hitWall || hitSelf;
}

function eatFood() {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
        snake.push({}); // Adiciona um segmento à cobra
        return true;
    }
    return false;
}

function placeFood() {
    food = {
        x: Math.floor(Math.random() * width / tileSize) * tileSize,
        y: Math.floor(Math.random() * height / tileSize) * tileSize,
    };
}

function drawGame() {
    ctx.clearRect(0, 0, width, height);

    // Desenha a cobra
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'lightgreen' : 'green';
        ctx.fillRect(segment.x, segment.y, tileSize, tileSize);
    });

    // Desenha a comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, tileSize, tileSize);
}
