//Сделай такую же галерею как в первом задании,
//но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям,
//открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры.

//Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Используй готовый код из первого задания.
//Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
//Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
//Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery.
//Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
//Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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
