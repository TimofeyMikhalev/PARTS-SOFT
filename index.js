
//Слайдер

const slides = document.querySelectorAll('.slid');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let slidePosition = 0;

prevButton.addEventListener('click', () => {
    if (slidePosition > 0) {
        slidePosition--;
        updateSlides();
    }
});

nextButton.addEventListener('click', () => {
    if (slidePosition < slides.length - 4) { // Показывать 4 изображения одновременно
        slidePosition++;
        updateSlides();
    }
});

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index >= slidePosition && index < slidePosition + 4) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlides(); // Показать первые четыре изображения при загрузке страницы


//Меню

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.header__menu-item');

    // Функция для закрытия всех открытых всплывающих меню
    function closeAllDropdowns() {
        dropdowns.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    }

    // Обработчик клика на весь документ
    document.addEventListener('click', function(event) {
        const isDropdownClick = event.target.closest('.header__menu-item');
        
        if (!isDropdownClick) {
            closeAllDropdowns();
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();

            if (!this.classList.contains('active')) {
                closeAllDropdowns();
            }

            this.classList.toggle('active');
        });
    });
});


//input Поиск

function checkInput() {
	const searchInput = document.getElementById('searchInput');
	const searchSpan = document.getElementById('searchSpan');
	
	if (searchInput.value !== '') {
		searchSpan.style.display = 'none';
	} else {
		searchSpan.style.display = 'inline';
	}
}

function clearText() {
	const searchInput = document.getElementById('searchInput');
	const searchSpan = document.getElementById('searchSpan');
	
	if (searchInput.value === '') {
		searchInput.value = searchSpan.innerText;
		searchSpan.style.display = 'none';
	} else {
		searchInput.value = '';
		searchSpan.style.display = 'inline';
	}
}


//бургер меню
const sandwichmenu = document.querySelector('#sandwichmenu');
const menu = document.querySelector('.menu__mobile');
const closeBlock = document.querySelector('.menu__mobile');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  sandwichmenu.classList.toggle('active');
  menu.classList.toggle('active');
});

closeBlock.addEventListener('click', function(e) {
    menu.classList.remove('active');
});
