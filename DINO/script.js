const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();
    if (
        dinoRect.bottom >= cactusRect.top &&
        dinoRect.right >= cactusRect.left &&
        dinoRect.left <= cactusRect.right
    ) {
        alert("Game Over!");
    }
}

let gameTimer = setInterval(checkCollision, 10);

document.addEventListener("keydown", function(event) {
    jump();
});
