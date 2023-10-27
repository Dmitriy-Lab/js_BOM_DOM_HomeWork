
// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после 
// последнего изображения должно отображаться первое, и наоборот.

const slide = document.querySelector('.slide');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');
const indis = document.querySelectorAll('.indi');
let countBtn = 1;


indis[0].addEventListener('click', () => {
    slide.src = './images/img1.jpg';
    countBtn = 1
});
indis[1].addEventListener('click', () => {
    slide.src = './images/img2.jpg';
    countBtn = 2;
});
indis[2].addEventListener('click', () => {
    slide.src = './images/img3.jpg';
    countBtn = 3;
});

nextBtn.addEventListener('click', () => {
    if (slide.src.includes('img3.jpg')) {
        slide.src = "./images/img1.jpg";
        countBtn = 1;
    } else {
        countBtn++
        slide.src = `./images/img${countBtn}.jpg`;
    }
});

backBtn.addEventListener('click', () => {
    if (slide.src.includes('img1.jpg')) {
        slide.src = "./images/img3.jpg";
        countBtn = 3;
    } else {
        countBtn--
        slide.src = `./images/img${countBtn}.jpg`;
    }
});