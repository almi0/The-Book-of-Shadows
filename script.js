let currentPage = 0;
const totalPages = document.querySelectorAll(".page-spread").length;

function showCurrentSpread() {
  const spreads = document.querySelectorAll(".page-spread");

  // Убираем класс active со всех разворотов
  spreads.forEach((spread, index) => {
    spread.classList.remove("active");
  });

  // Добавляем класс active к текущему развороту
  spreads[currentPage].classList.add("active");

  // Сбрасываем анимацию переворота
  const pages = spreads[currentPage].querySelectorAll(".page");
  pages.forEach(page => {
    page.classList.remove("flipped-left", "flipped-right");
  });
}

function animatePageFlip(page, animationClass) {
  return new Promise((resolve) => {
    page.classList.add(animationClass); // Запускаем анимацию переворота
    setTimeout(() => {
      resolve(); // Разрешаем промис после завершения анимации
    }, 1200); // Время анимации (1.2s)
  });
}

async function nextPage() {
  if (currentPage < totalPages - 1) {
    const currentSpread = document.querySelectorAll(".page-spread")[currentPage];
    const rightPage = currentSpread.querySelector(".right"); // Правая страница

    // Убираем текст перед анимацией
    rightPage.classList.remove("active");

    // Запускаем анимацию переворота влево
    await animatePageFlip(rightPage, "flipped-left");

    // Переходим к следующему развороту
    currentPage++;
    showCurrentSpread();

    // Делаем текст видимым на обеих страницах одновременно
    const activePages = document.querySelectorAll(".page-spread.active .page");
    activePages.forEach(page => {
      page.classList.add("active"); // Показываем текст на текущей странице
    });
  }
}

async function prevPage() {
  if (currentPage > 0) {
    const currentSpread = document.querySelectorAll(".page-spread")[currentPage];
    const leftPage = currentSpread.querySelector(".left"); // Левая страница

    // Убираем текст перед анимацией
    leftPage.classList.remove("active");

    // Запускаем анимацию переворота вправо
    await animatePageFlip(leftPage, "flipped-right");

    // Переходим к предыдущему развороту
    currentPage--;
    showCurrentSpread();

    // Делаем текст видимым на обеих страницах одновременно
    const activePages = document.querySelectorAll(".page-spread.active .page");
    activePages.forEach(page => {
      page.classList.add("active"); // Показываем текст на текущей странице
    });
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  showCurrentSpread();
});