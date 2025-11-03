import React, { useState } from 'react';

const Game = () => {
    return (
        <div id="game-container">
            <h2>가위바위보!</h2>
            <div id="button-wrapper">
                <button onClick={() => playGame('scissors')}>가위 ✌️</button>
                <button onClick={() => playGame('rock')}>바위 ✊</button>
                <button onClick={() => playGame('paper')}>보 ✋</button>
            </div>
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

