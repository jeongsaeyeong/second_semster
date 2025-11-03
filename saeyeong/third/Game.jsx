import React, { useState } from 'react';

const choices = ['scissors', 'rock', 'paper'];
const choiceEmojis = {
    scissors: '✌️',
    rock: '✊',
    paper: '✋'
};

// 컴퓨터 선택 정하는 함수
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 승부 판별 함수
const getResult = (user, computer) => {
    if (user === computer) {
        return '무승부!';
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return '승리!';
    }
    return '패배...';
}

const getResultColor = (result) => {
    if (result === '승리!') return '#5cb85c';
    if (result === '패배...') return '#d9534f';
    return '#333';
}

const Game = () => {
    // 1. React의 '상태'로 관리할 변수들을 선언합니다.
    // DOM에서 값을 읽어오는 대신, React가 이 변수들을 기억합니다.
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameResult, setGameResult] = useState(null);

    // 2. 이벤트 핸들러 함수 (버튼 클릭 시 실행)
    const playGame = (userSelectedChoice) => {
        // 2-1. 컴퓨터의 선택
        const compChoice = getComputerChoice();

        // 2-2. 승부 판별
        const result = getResult(userSelectedChoice, compChoice);

        // 3. '상태'를 업데이트합니다.
        // setState가 호출되면, React는 컴포넌트를 다시 렌더링합니다.
        setUserChoice(userSelectedChoice);
        setComputerChoice(compChoice);
        setGameResult(result);
    };

    // 4. JSX (UI 렌더링)
    // 상태(state)가 변경될 때마다 이 return 부분이 자동으로 다시 그려집니다.
    return (
        <div id="game-container">
            <h2>가위바위보!</h2>

            {/* - 바닐라: <button id="scissors-btn">
              - 리액트: onClick 이벤트 핸들러를 직접 연결합니다.
            */}
            <div id="button-wrapper">
                <button onClick={() => playGame('scissors')}>가위 ✌️</button>
                <button onClick={() => playGame('rock')}>바위 ✊</button>
                <button onClick={() => playGame('paper')}>보 ✋</button>
            </div>

            {/* - 바닐라: <span id="user-choice"></span>
              - 리액트: {state 변수}를 사용해 동적으로 값을 표시합니다.
              - userChoice가 null일 경우(초기 상태) 아무것도 표시하지 않습니다.
            */}
            <div id="result-area">
                <p>당신의 선택: <span id="user-choice">{userChoice && choiceEmojis[userChoice]}</span></p>
                <p>컴퓨터의 선택: <span id="computer-choice">{computerChoice && choiceEmojis[computerChoice]}</span></p>

                <h3>
                    결과:
                    <span id="game-result" style={{ color: getResultColor(gameResult) }}>
                        {gameResult}
                    </span>
                </h3>
            </div>
        </div>
    );
}

export default Game

