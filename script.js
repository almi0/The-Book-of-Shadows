let currentPage = 0;
const totalPages = document.querySelectorAll(".page-spread").length;

function showCurrentSpread() {
    const spreads = document.querySelectorAll(".page-spread");

    spreads.forEach((spread, index) => {
        spread.classList.remove("active");
    });

    spreads[currentPage].classList.add("active");

    const pages = spreads[currentPage].querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("flipped-left", "flipped-right");
    });
}

function animatePageFlip(page, animationClass) {
    return new Promise((resolve) => {
        page.classList.add(animationClass);
        setTimeout(() => {
            resolve();
        }, 1200);
    });
}

async function nextPage() {
    if (currentPage < totalPages - 1) {
        const currentSpread = document.querySelectorAll(".page-spread")[currentPage];
        const rightPage = currentSpread.querySelector(".right");

        rightPage.classList.remove("active");
        await animatePageFlip(rightPage, "flipped-left");

        currentPage++;
        showCurrentSpread();

        const activePages = document.querySelectorAll(".page-spread.active .page");
        activePages.forEach(page => {
            page.classList.add("active");
        });
    }
}

async function prevPage() {
    if (currentPage > 0) {
        const currentSpread = document.querySelectorAll(".page-spread")[currentPage];
        const leftPage = currentSpread.querySelector(".left");

        leftPage.classList.remove("active");
        await animatePageFlip(leftPage, "flipped-right");

        currentPage--;
        showCurrentSpread();

        const activePages = document.querySelectorAll(".page-spread.active .page");
        activePages.forEach(page => {
            page.classList.add("active");
        });
    }
}

// Обработчик кликов по ссылкам
// document.querySelectorAll('.page a').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.stopPropagation(); // Останавливаем распространение события
//     });
// });

// Обработчик кликов по .click-zone
document.querySelectorAll('.click-zone').forEach(zone => {
    zone.addEventListener('click', function(event) {
        if (zone.classList.contains('next')) {
            nextPage(); // Перелистываем вперед
        } else if (zone.classList.contains('prev')) {
            prevPage(); // Перелистываем назад
        }
    });
});

document.querySelectorAll('.internal-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // отключаем стандартное поведение
  
      const targetId = this.getAttribute('href'); // получаем ID цели, например "#chapter2"
      const targetElement = document.querySelector(targetId); // находим элемент
      const targetSpread = targetElement.closest('.page-spread'); // находим его .page-spread
      const spreads = document.querySelectorAll('.page-spread');
      const targetIndex = Array.from(spreads).indexOf(targetSpread);
  
      if (targetIndex === -1 || targetIndex === currentPage) return;
  
      // Анимация переворота — можно использовать уже готовую функцию
      animateToPage(targetIndex);
    });
  });
  
  async function animateToPage(targetIndex) {
    const direction = targetIndex > currentPage ? 'next' : 'prev';
  
    while (currentPage !== targetIndex) {
      if (direction === 'next') {
        await nextPage();
      } else {
        await prevPage();
      }
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    showCurrentSpread();
});