document.addEventListener("DOMContentLoaded", () => {
    const Addbutton = document.querySelector('.add');
    const FristN = document.querySelector('.firstN');
    const SecondN = document.querySelector('.secondN');
    const Answer = document.querySelector('.answer');

    const Add = (num1, num2) =>{
        let answer = 0;
        answer = num1 + num2;
        return answer;
    }

    // Addbutton을 눌렀을 때 Add를 호출하고 return 받은 값을 정답란에 출력하세요.
    Addbutton.addEventListener("click", () =>{
        let num1 = Number(FristN.value);
        let num2 = Number(SecondN.value);

        if(num1 === 0 || num2 === 0){
            alert("두 개의 숫자를 입력하세요.");
            return;
        }

        const result = Add(num1, num2);
        Answer.textContent = result;
    })
})