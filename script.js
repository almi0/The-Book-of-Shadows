// let currentPage = 0;

// function updatePages() {
//     const book = document.getElementById("book");
//     const allPages = document.querySelectorAll(".page");

//     book.style.transform = `rotateY(${-180 * currentPage}deg)`;

//     allPages.forEach(page => page.style.display = "none");

//     const leftPage = document.querySelector(`.page.left[data-page='${currentPage}']`);
//     if (leftPage) leftPage.style.display = "block";

//     const rightPage = document.querySelector(`.page.right[data-page='${currentPage + 1}']`);
//     if (rightPage) rightPage.style.display = "block";
// }

// function prevPage() {
//     if (currentPage > 0) {
//         currentPage--;
//         updatePages();
//     }
// }

// function nextPage() {
//     const totalPages = Math.max(...Array.from(document.querySelectorAll(".page")).map(p => parseInt(p.getAttribute("data-page"))));
//     if (currentPage < totalPages - 1) {
//         currentPage++;
//         updatePages();
//     }
// }

// updatePages()


// let currentPage = 0;

// function updatePages() {
//   const book = document.getElementById("book");
//   const allPages = document.querySelectorAll(".page");

//   // Анимация поворота
//   book.style.transform = `rotateY(${-180 * currentPage}deg)`;

//   // Скрываем все страницы
//   allPages.forEach(page => page.style.display = "none");

//   // Показываем текущую левую
//   const leftPage = document.querySelector(`.page.left[data-page='${currentPage}']`);
//   if (leftPage) leftPage.style.display = "block";

//   // Показываем следующую правую
//   const rightPage = document.querySelector(`.page.right[data-page='${currentPage + 1}']`);
//   if (rightPage) rightPage.style.display = "block";
// }

// function prevPage() {
//   if (currentPage > 0) {
//     currentPage--;
//     updatePages();
//   }
// }

// function nextPage() {
//   const totalPages = Math.max(...Array.from(document.querySelectorAll(".page")).map(p => parseInt(p.getAttribute("data-page"))));
//   if (currentPage < totalPages - 1) {
//     currentPage++;
//     updatePages();
//   }
// }

// // Запускаем при загрузке
// document.addEventListener("DOMContentLoaded", function () {
//   updatePages();
// });





// let currentPage = 0; // Теперь это номер главы

// function updatePages() {
//   const book = document.getElementById("book");
//   const allPages = document.querySelectorAll(".page");

//   // Анимация поворота книги
//   book.style.transform = `rotateY(${-180 * currentPage}deg)`;

//   // Скрываем все страницы
//   allPages.forEach(page => page.style.display = "none");

//   // Номера страниц для текущей главы
//   const leftPageNum = currentPage * 2;
//   const rightPageNum = currentPage * 2 + 1;

//   // Ищем нужные страницы
//   const leftPage = document.querySelector(`.page.left[data-page='${leftPageNum}']`);
//   const rightPage = document.querySelector(`.page.right[data-page='${rightPageNum}']`);

//   // Показываем их
//   if (leftPage) leftPage.style.display = "block";
//   if (rightPage) rightPage.style.display = "block";
// }

// // Перелистнуть назад
// function prevPage() {
//   if (currentPage > 0) {
//     currentPage--;
//     updatePages();
//   }
// }

// // Перелистнуть вперёд
// function nextPage() {
//   const totalPages = Math.max(...Array.from(document.querySelectorAll(".page")).map(p => parseInt(p.getAttribute("data-page"))));
//   const maxChapter = Math.floor(totalPages / 2) - 1;

//   if (currentPage < maxChapter) {
//     currentPage++;
//     updatePages();
//   }
// }

// console.log('currentPage:', currentPage);
// console.log('leftPage:', document.querySelector(`.page.left[data-page='${currentPage * 2}']`));
// console.log('rightPage:', document.querySelector(`.page.right[data-page='${currentPage * 2 + 1}']`));

// console.log('currentPage:', currentPage);
// console.log('Ищу левую:', currentPage * 2);
// console.log('Ищу правую:', currentPage * 2 + 1);


// console.log('До клика currentPage =', currentPage);
// console.log('После клика currentPage =', currentPage);








// // Запускаем при загрузке
// document.addEventListener("DOMContentLoaded", function () {
//   updatePages();
// });






// let currentPage = 0;

// function updatePages() {
//   const book = document.getElementById("book");
//   const allPages = document.querySelectorAll(".page");

//   // Анимация поворота
//   book.style.transform = `rotateY(${-180 * currentPage}deg)`;

//   // Скрываем все страницы
//   allPages.forEach(page => page.style.display = "none");

//   // Номера текущих страниц
//   const leftPageNum = currentPage * 2;
//   const rightPageNum = currentPage * 2 + 1;

//   // Находим и показываем нужные
//   const leftPage = document.querySelector(`.page.left[data-page='${leftPageNum}']`);
//   const rightPage = document.querySelector(`.page.right[data-page='${rightPageNum}']`);

//   if (leftPage) leftPage.style.display = "block";
//   if (rightPage) rightPage.style.display = "block";

//   console.log('Текущая глава:', currentPage);
// }

// // Перелистывание
// function prevPage() {
//   if (currentPage > 0) {
//     currentPage--;
//     updatePages();
//   }
// }

// function nextPage() {
//   console.log('Клик на кнопку Вперёд');

//   const totalPages = Math.max(
//     ...Array.from(document.querySelectorAll(".page")).map(p =>
//       parseInt(p.getAttribute("data-page"))
//     )
//   );

//   const maxChapter = Math.floor((totalPages - 1) / 2);

//   console.log('maxChapter:', maxChapter);
//   console.log('currentPage до:', currentPage);

//   if (currentPage < maxChapter) {
//     currentPage++;
//     console.log('currentPage после:', currentPage);
//     updatePages();
//   } else {
//     console.log('Вы достигли последней главы');
//   }
// }

// // Запуск при загрузке
// document.addEventListener("DOMContentLoaded", function () {
//   updatePages();
// });





let currentPage = 0;

function updatePages() {
  const book = document.getElementById("book");
  const allPages = document.querySelectorAll(".page");

  // Анимация поворота
  book.style.transform = `rotateY(${-180 * currentPage}deg)`;

  // Скрываем все страницы
  allPages.forEach(page => page.style.display = "none");

  // Номера текущих страниц
  const leftPageNum = currentPage * 2;
  const rightPageNum = currentPage * 2 + 1;

  // Находим и показываем нужные
  const leftPage = document.querySelector(`.page.left[data-page='${leftPageNum}']`);
  const rightPage = document.querySelector(`.page.right[data-page='${rightPageNum}']`);

  if (leftPage) leftPage.style.display = "block";
  if (rightPage) rightPage.style.display = "block";

  console.log('Текущая глава:', currentPage);
}

// Перелистывание назад
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
}

// Перелистывание вперёд
function nextPage() {
  console.log('Клик на кнопку Вперёд');

  const totalPages = Math.max(
    ...Array.from(document.querySelectorAll(".page")).map(p =>
      parseInt(p.getAttribute("data-page"))
    )
  );

  const maxChapter = Math.floor((totalPages - 1) / 2); // ← ИСПРАВЛЕНИЕ

  console.log('maxChapter:', maxChapter);
  console.log('currentPage до:', currentPage);

  if (currentPage < maxChapter) {
    currentPage++;
    console.log('currentPage после:', currentPage);
    updatePages();
  } else {
    console.log('Вы достигли последней главы');
  }
}

// Запуск при загрузке
document.addEventListener("DOMContentLoaded", function () {
  updatePages();
});
