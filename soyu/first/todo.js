document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const writeBtn = document.querySelector('.write_btn');
    const writeWrap = document.querySelector('.write_wrap');
    const noewNoteInput = document.querySelector('.write_pop input');
    const cancleBtn = document.querySelector('.cancle');
    const applyBtn = document.querySelector('.apply');

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
                    <label for="${todoId}></label>
                </div>
                <p class="content">${todo.text}</p>
                <div class="button_wrap">
                    <button class="modify"></button>
                    <button class="delete"></button>
                </div>
            `;
        })

        main.appendChild(todoElement);
    }

    const addTodo = () => {
        const text = noewNoteInput.value.trim();
        if (text === '') {
            alert('내용을 입력해주세요.');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(newTodo);
        renderTodos();
        noewNoteInput.value = '';
        closePopup();
    }

    // 팝업 열리기

    const openPopup = () => {
        writeWrap.style.display = 'flex';
        noewNoteInput.focus();
    }

    const closePopup = () => {
        writeWrap.style.display = 'none';
    }

    // 이벤트 리스너 등록
    writeBtn.addEventListener('click', openPopup);
    cancleBtn.addEventListener('click', closePopup);
    applyBtn.addEventListener('click', addTodo);

    renderTodos();
})