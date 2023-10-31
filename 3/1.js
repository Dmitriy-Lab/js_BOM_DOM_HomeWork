// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, 
// давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Разработка веб-приложения:
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// * Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const articles = [];
const image = document.querySelector('.photo');
const photographer = document.querySelector('.photographer');
const counter = document.querySelector('.counter');
const likeBtn = document.querySelector('.like');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
let countPhoto = 0;

async function getFetch() {
    const url = 'https://api.unsplash.com/photos/random/?client_id=C08d3_zNiS7bsdvGRSfdqEESDiJT5rwIIg9EqIZaz6A';
    const response = await fetch(url);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа
        const json = await response.json();
        const article = {};
        article.photo = json.links.download;
        article.name = json.user.first_name;
        article.lastName = json.user.last_name;
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));
        photographer.textContent = `${article.name} ${article.lastName}`;
        image.src = articles[articles.length - 1].photo;
        return article;
    }
};
getFetch();

(function isLiked() {
if (JSON.parse(localStorage.getItem('likes'))) {
    let likes = JSON.parse(localStorage.getItem('likes'));
    counter.textContent = likes;
}
})();

likeBtn.addEventListener('click', () => {
    if (JSON.parse(localStorage.getItem('likes'))) {
        let likes = JSON.parse(localStorage.getItem('likes'));
        likes++;
        localStorage.setItem('likes', JSON.stringify(likes));
        counter.textContent = likes;
    } else {

        localStorage.setItem('likes', JSON.stringify(1));
        counter.textContent = '1';
    }
});

backBtn.addEventListener('click', () => {
    const array = JSON.parse(localStorage.getItem('articles'));
    if (array.length - 1 - countPhoto) {
        countPhoto++;
        photographer.textContent = `${array[array.length - 1 - countPhoto].name} ${array[array.length - 1 - countPhoto].lastName}`;
        image.src = articles[articles.length - 1 - countPhoto].photo;
    }
});

nextBtn.addEventListener('click', () => {
    const array = JSON.parse(localStorage.getItem('articles'));
    if (countPhoto) {
        countPhoto--;
        photographer.textContent = `${array[array.length - 1 - countPhoto].name} ${array[array.length - 1 - countPhoto].lastName}`;
        image.src = articles[articles.length - 1 - countPhoto].photo;
    } else {
        getFetch().then(function (result) { },
            error => console.log(error));
    }
});



