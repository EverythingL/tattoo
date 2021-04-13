
const $ = (selector) => document.querySelector(selector)

const headerBurger = document.querySelector('.header-burger');

const headerList = $('.header-list');

const body = $('body');

let opacity = 0;

let intervalId = 0;

// function fadeOut() {
// 	intervalId = setInterval(show, 200);
// }
// function fadeIn() {
// 	intervalId = setInterval(hide, 200);
// }

// function hide() {
// 	opacity = Number(window.getComputedStyle(headerList).getPropertyValue('opacity'));
// 	if (opacity > 0) {
// 		console.log(opacity)
// 		opacity -= 0.1;
// 		headerList.style.opacity = opacity;

// 	} else {
// 		clearInterval(intervalId);
// 	}
// }
// function show() {
// 	opacity = Number(window.getComputedStyle(headerList).getPropertyValue('opacity'));
// 	if (opacity <= 1) {
// 		console.log(opacity)
// 		opacity += 0.2;
// 		headerList.style.opacity = opacity;

// 	} else {
// 		clearInterval(intervalId);
// 	}
// }


headerBurger.addEventListener('click', (event) => {
	// const target = event.target;
	headerList.classList.toggle('active');
	headerBurger.classList.toggle('active');
	body.classList.toggle('lock');
		// if (!target.classList.contains('active')) {
		// 	// fadeOut();	
		// } else {
		// 	headerList.classList.remove('active');
		// 	headerBurger.classList.remove('active');
		// 	body.classList.remove('lock');
		// 	// fadeIn();
		// }
});


window.onload = () => {
	const preloader = $('.container-preloader');
	preloader.style.display = 'none';
	$('.wrapper').style.display = 'block';
	body.style.backgroundImage = `url(img/about.JPG)`;
}