document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');             // 할 일 목록이 표시될 영역
    const writeBtn = document.querySelector('.write_btn');     // '새 노트 작성' 버튼
    const writeWrap = document.querySelector('.write_wrap');   // 팝업 전체(배경 포함)
    const newNoteInput = document.querySelector('.write_pop input'); // 팝업 안의 입력창
    const cancelBtn = document.querySelector('.cancle');       // 취소 버튼
    const applyBtn = document.querySelector('.apply');         // 적용(추가) 버튼

    let todos = [];
    const renderTodos = () => {
        main.innerHTML = '';
        todos.forEach(todo => {
            const todoId = `check-${todo.id}`;
            const todoElement = document.createElement('div');
            todoElement.classList.add('list');
            todoElement.innerHTML = `
                <div class="check_wrap">
                    <input type="checkbox" id="${todoId}">
                    <label for="${todoId}"></label>
                </div>
                <p class="content">${todo.text}</p>
                <div class="button_wrap">
                    <button class="modify"></button>
                    <button class="delete"></button>
                </div>
            `;
            main.appendChild(todoElement);
        });
    };

    const addTodo = () => {
        const text = newNoteInput.value.trim(); // 입력값의 양쪽 공백을 제거합니다.
        if (text === '') {
            alert('내용을 입력해주세요.');
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false // 이 예제에서는 사용되지 않지만 구조는 유지합니다.
        };

        todos.push(newTodo);
        renderTodos();
        newNoteInput.value = '';
        closePopup();
    };

    // 팝업 열리게 하는 거
    
    const openPopup = () => {
        writeWrap.style.display = 'flex';
        newNoteInput.focus(); 
    };

    const closePopup = () => {
        writeWrap.style.display = 'none';
    };

    // ------------------ 이벤트 리스너 등록 ------------------ //
    
    // '새 노트 작성' 버튼을 클릭하면 팝업을 엽니다.
    writeBtn.addEventListener('click', openPopup);
    
    // '취소' 버튼을 클릭하면 팝업을 닫습니다.
    cancelBtn.addEventListener('click', closePopup);
    
    // '적용' 버튼을 클릭하면 할 일을 추가합니다.
    applyBtn.addEventListener('click', addTodo);
    
    // 팝업 입력창에서 Enter 키를 눌러도 할 일이 추가되도록 합니다.
    newNoteInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // 페이지가 처음 로드될 때 한 번 실행하여 초기 상태를 설정합니다.
    renderTodos();
});