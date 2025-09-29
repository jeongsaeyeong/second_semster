// 다음과 같은 조건을 만족하여 사용하세요.
// 1) 버튼을 눌렀을 때 각 기능을 만족할 것.
// 2) 함수를 만들어서 호출하는 식으로 할 것.

// 기본 예시

document.addEventListener("DOMContentLoaded", () => {
    const topDisplay = document.querySelector(".calculate_top");
    const bottomDisplay = document.querySelector(".calculate_bottom");

    let firstNumber = "";
    let secondNumber = "";
    let operator = null;

    // 숫자 버튼 이벤트
    document.querySelectorAll(".seven, .eight, .nine, .four, .five, .six, .one, .two, .three, .zero")
        .forEach(button => {
            button.addEventListener("click", () => {
                if (!operator) {
                    firstNumber += button.textContent;
                    topDisplay.textContent = firstNumber;
                } else {
                    secondNumber += button.textContent;
                    topDisplay.textContent = firstNumber + " " + operator + " " + secondNumber;
                }
            });
        });

    // + 버튼
    document.querySelector(".plus").addEventListener("click", () => {
        if (firstNumber !== "") {
            operator = "+";
            topDisplay.textContent = firstNumber + " " + operator;
        }
    });

    // = 버튼
    document.querySelector(".result").addEventListener("click", () => {
        if (operator === "+" && firstNumber !== "" && secondNumber !== "") {
            const result = Number(firstNumber) + Number(secondNumber);
            bottomDisplay.textContent = result;
        }
    });

    // C 버튼
    document.querySelector(".reset").addEventListener("click", () => {
        firstNumber = "";
        secondNumber = "";
        operator = null;
        topDisplay.textContent = "";
        bottomDisplay.textContent = "";
    });
});