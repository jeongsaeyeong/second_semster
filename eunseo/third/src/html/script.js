const scissorsBtn = document.getElementById('scissors-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');

const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const gameResultDisplay = document.getElementById('game-result');

// 선택지 배열
const choices = ['scissors', 'rock', 'paper'];
const choiceEmojis = {
    scissors: '✌️',
    rock: '✊',
    paper: '✋'
};

// 2. 이벤트 리스너 등록하기
scissorsBtn.addEventListener('click', () => playGame('scissors'));
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));

// 3. 게임 실행 함수
function playGame(userChoice) {
    // 3-1. 컴퓨터의 선택
    const computerChoice = getComputerChoice();

    // 3-2. 승부 판별
    const result = getResult(userChoice, computerChoice);

    // 3-3. DOM 업데이트 (결과 표시)
    userChoiceDisplay.textContent = choiceEmojis[userChoice];
    computerChoiceDisplay.textContent = choiceEmojis[computerChoice];
    gameResultDisplay.textContent = result;

    // (선택) 결과에 따라 색상 변경
    if (result === '승리!') {
        gameResultDisplay.style.color = '#5cb85c'; // 초록색
    } else if (result === '패배...') {
        gameResultDisplay.style.color = '#d9534f'; // 빨간색
    } else {
        gameResultDisplay.style.color = '#333'; // 검은색
    }
}

// 4. 컴퓨터 선택 정하는 함수
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 5. 승부 판별 함수
function getResult(user, computer) {
    if (user === computer) {
        return '무승부!';
    }

    // 승리 조건
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return '승리!';
    }

    // 그 외에는 모두 패배
    return '패배...';
}