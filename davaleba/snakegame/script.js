let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
];

let dx = 10;
let dy = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i === 0) ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);

    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);
  }

  snake.pop();
  let head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);

  requestAnimationFrame(draw);
}

draw();
