  let score = 0;
    let timeLeft = 10;
    let gameActive = false;
    let countdown;
 
    const target = document.getElementById('target');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('start-btn');
 
    function moveTarget() {
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 80;
        target.style.left = Math.floor(Math.random() * maxX) + 'px';
        target.style.top = Math.floor(Math.random() * maxY) + 'px';
    }
 
    function startGame() {
 
        score = 0;
        timeLeft = 10;
        gameActive = true;
        scoreDisplay.innerText = score;
        timerDisplay.innerText = timeLeft;
        startBtn.style.display = 'none';
        target.style.display = 'block';
        moveTarget();
 
        countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = timeLeft;
 
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }
 
    function endGame() {
        gameActive = false;
        clearInterval(countdown);
        target.style.display = 'none';
        startBtn.style.display = 'block';
        startBtn.innerText = "ΞΑΝΑΠΑΙΞΕ";
 
        setTimeout(() => {
            alert("Τέλος Χρόνου Το σκορ σου είναι: " + score);
        }, 100);
    }
 
    target.addEventListener('mousedown', () => {
        if (gameActive) {
            score++;
            scoreDisplay.innerText = score;
            moveTarget();
        }
    });
 
 
    window.addEventListener('resize', () => {
        if (gameActive) moveTarget();
    });
 
