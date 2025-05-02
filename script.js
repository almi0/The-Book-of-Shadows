let currentPage = 0;
const totalPages = document.querySelectorAll(".page-spread").length;

function showCurrentSpread() {
  const spreads = document.querySelectorAll(".page-spread");
  spreads.forEach((spread, index) => {
    spread.classList.remove("active");
  });
  spreads[currentPage].classList.add("active");

  // Сбрасываем анимацию переворота
  const pages = spreads[currentPage].querySelectorAll(".page");
  pages.forEach(page => {
    page.classList.remove("flipped-left", "flipped-right");
  });

  // Делаем текст видимым
  setTimeout(() => {
    const activePages = spreads[currentPage].querySelectorAll(".page");
    activePages.forEach(page => {
      page.classList.add("active"); // Показываем текст на текущей странице
    });
  }, 500); // Задержка для совпадения с серединой анимации (1s / 2 = 500ms)
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    const spread = document.querySelectorAll(".page-spread")[currentPage];
    const rightPage = spread.querySelector(".right"); // Правая страница

    // Убираем текст перед анимацией
    rightPage.classList.remove("active");

    // Добавляем класс для переворота влево
    rightPage.classList.add("flipped-left");

    setTimeout(() => {
      currentPage++;
      showCurrentSpread();
    }, 1000); // Время анимации (1s)
  }
}

function prevPage() {
  if (currentPage > 0) {
    const spread = document.querySelectorAll(".page-spread")[currentPage];
    const leftPage = spread.querySelector(".left"); // Левая страница

    // Убираем текст перед анимацией
    leftPage.classList.remove("active");

    // Добавляем класс для переворота вправо
    leftPage.classList.add("flipped-right");

    setTimeout(() => {
      currentPage--;
      showCurrentSpread();
    }, 1000); // Время анимации (1s)
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  showCurrentSpread();
});