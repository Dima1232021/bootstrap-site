//<ОСНОВНОЙ БЛОК>====================================================================================================
window.onscroll = () => {
	const header = document.querySelector('.header');
	const anchor = document.querySelector('.anchor-on-top');
	const Y = window.scrollY;

	if (Y > 100) {
		header.classList.add('header_active');
		anchor.classList.add('active');
	}
	else if (Y < 150) {
		header.classList.remove('header_active')
		anchor.classList.remove('active');
	}
}
//<ОСНОВНОЙ БЛОК>====================================================================================================
$(function () {
	$("#content").mixItUp({

		selectors: {
			target: '.mix',
			filter: '.filter',
			sort: '.sort'
		},

		load: {
			filter: 'all',
			sort: 'myorder:desc'
		},

		controls: {
			enable: true,
		},

		animation: {
			enable: true,
			effects: 'scale fade',
			duration: 600
		},

	});
});
//<ОСНОВНОЙ БЛОК>====================================================================================================
document.querySelector('.header__burger').onclick = () => {
	document.querySelector('.header__burger').classList.toggle('header__burger_inactive');
	document.querySelector('.header__burger_not-active').classList.toggle('header__burger_active');
	document.querySelector('.header__menu-transitions').classList.toggle('header__menu-transitions_active');
};
document.querySelector('.header__burger_not-active' ,'.header__link').onclick = () => {
	document.querySelector('.header__burger_not-active').classList.remove('header__burger_active');
	document.querySelector('.header__burger').classList.remove('header__burger_inactive');
	document.querySelector('.header__menu-transitions').classList.remove('header__menu-transitions_active');
};


document.querySelectorAll('.header__link').forEach((el) => {

	el.onclick = () => {
		document.querySelector('.header__burger_not-active').classList.remove('header__burger_active');
		document.querySelector('.header__burger').classList.remove('header__burger_inactive');
		document.querySelector('.header__menu-transitions').classList.remove('header__menu-transitions_active');
	};

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//<ОСНОВНОЙ БЛОК>====================================================================================================
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	document.querySelectorAll('.section').forEach((el, i) => {
		let true_or_false = () => {
			if (document.querySelector(".header").classList.contains("header_active")) {
				return document.querySelector('.header_active')

			} else {
				return document.querySelector('.header')
			}
		};
		if (window.scrollY >= --document.querySelector('.footer').offsetTop + document.querySelector('.footer').offsetHeight - window.innerHeight) {


			document.querySelectorAll('.header__list a').forEach((el) => {
				if (el.classList.contains('header__link_active')) {
					el.classList.remove('header__link_active');
				}
				document.querySelectorAll('.header__list li')[i].querySelector('a').classList.add('header__link_active');
			});

		} else if (el.offsetTop - true_or_false().clientHeight <= scrollDistance) {
			document.querySelectorAll('.header__list a').forEach((el) => {
				if (el.classList.contains('header__link_active')) {
					el.classList.remove('header__link_active');
				}
			});
			document.querySelectorAll('.header__list li')[i].querySelector('a').classList.add('header__link_active');
		};
	});
});
//<ОСНОВНОЙ БЛОК>====================================================================================================
//<ОСНОВНОЙ БЛОК>====================================================================================================
