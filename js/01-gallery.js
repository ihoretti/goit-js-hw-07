//Создай галерею с возможностью клика по её элементам и
//просмотра полноразмерного изображения в модальном окне.

//Выполняй это задание в файлах 01-gallery.html и 01-gallery.js.
// Разбей его на несколько подзадач:

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Реализация делегирования на div.gallery и получение url большого изображения.
//Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
//Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//Замена значения атрибута src элемента <img> в модальном окне перед открытием.
//Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

//Разметка элемента галереи
//Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>,
//и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

//Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет
// перенаправлен на другую страницу.Запрети это поведение по умолчанию.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Получаем галерею
const getGallery = document.querySelector(".gallery");

//Перебираем массив с фотографиями которые храняться в галерее

const getGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    console.log(preview);
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
          </div>`;
  })
  //Перебраный массив соединяем в один массив
  .join("");

getGallery.insertAdjacentHTML("afterbegin", getGalleryItems);
//Добавляем слушателя(клик на фотографию?)
getGallery.addEventListener("click", onParentClick);

function onParentClick(evt) {
  // Запрет перехода по ссылке
  evt.preventDefault();
  // Если не равно классу - пропустить
  if (evt.target.className !== "gallery__image") {
    return;
  }
  // Ссылка на текущий data-source
  const ligthBoxShow = basicLightbox.create(`
		<img src = '${evt.target.dataset.source}' alt = '${evt.target.alt}'/>
	`);

  ligthBoxShow.show();

  // Закрытие модального окна по нажатию клавиши Escape
  document.addEventListener("keydown", (event) => {
    console.log(event.code); //Код клавиатуры
    if (event.code !== "Escape") {
      return;
    }
    ligthBoxShow.close();
  });
}

//console.log(galleryItems);
