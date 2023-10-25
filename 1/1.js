// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. 
// Каждое занятие имеет название, время проведения, максимальное количество участников и 
// текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, 
// максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. 
// Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и 
// состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". 
// После отмены записи, обновите количество записанных участников и состояние кнопки.


const classes = [
    {
        name: 'TRX',
        time: '13:00-14:00',
        currentPeople: 0,
        maxPeople: 15,
        id: 1,
    },
    {
        name: 'Strength',
        time: '18:00-19:00',
        currentPeople: 0,
        maxPeople: 15,
        id: 2,
    },
    {
        name: 'Agility',
        time: '10:00-12:00',
        currentPeople: 0,
        maxPeople: 15,
        id: 3,
    },

];
const timetable = document.querySelector('.timetable');
function createCards() {
    timetable.innerHTML = '';
    classes.forEach(element => {
        let elem = document.createElement('div');
        const exersizesValue = `
    <h4 class="name">Название: ${element.name}</h4>
    <p class="time">Время занятия: ${element.time}</p>
    <p class="current">Записалось: ${element.currentPeople}</p>
    <p class="max">Максимум мест: ${element.maxPeople}</p>
    <button class="addPeople${element.id}">Записаться</button>
    <button class="removePeople${element.id}">Отменить запись</button>
    <br><br><br>`;
        elem.innerHTML = exersizesValue;
        timetable.append(elem);
        const addBtn = document.querySelector(`.addPeople${element.id}`);
        const removeBtn = document.querySelector(`.removePeople${element.id}`);
        setEventListeners(addBtn, removeBtn, element.id);
        if (element.maxPeople == element.currentPeople) {
            addBtn.disabled = true;
        }

    })

};
createCards();
function setEventListeners(add, remove, id) {
    add.removeEventListener('click', addFunc);
    remove.removeEventListener('click', removeFunc);
    add.addEventListener("click", addFunc);
    remove.addEventListener("click", removeFunc);

    function addFunc() {
        classes.forEach(el => {
            if (el.id == id) {
                el.currentPeople += 1;
            }
        }); 
        createCards();
    };
    function removeFunc() {
        classes.forEach(el => {
            if (el.id == id && !el.currentPeople == 0) {
                el.currentPeople -= 1;
            }
        });
        createCards();
    }

};