//</ОСНОВНОЙ БЛОК>====================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.imageSlider__image-slide', {
	// нескінченність слайдів
	loop: true,
	// швидкість
	speed: 800,
	// підгружаємо картинки
	lazy: {
		loadPrevNext: true,
	},
	// навигация
	pagination: {
		// булеты
		el: '.swiper-pagination',
		clickable: true,
	},
	// кількість слайдів 
	slidesPreViwe: 1,
	//автопрокрутка слайда
	//автопрокрутка слайда
	autoplay: {
		//перерив
		delay: 10000,
		//відключити після ручного переключення слайда
		disableOnInteraction: false,
	},
	//ефект переключення слайда
	effect: 'fade',
	//перетаскування
	allowTouchMove: false,
	renderBullet: function (index, className) {
		return '<span className="' + className + '">' + (index + 1) + '</span>';
	}
});
//</ОСНОВНОЙ БЛОК>====================================================================================================
width = document.body.clientWidth;

const X = window.header;
console.log(X);

if (992 < width) {
	window.onscroll = () => {
		const header = document.querySelector('.header');
		const partners = document.querySelector('.imageSlider');
		const Y = window.scrollY;

		if (Y > 57.6) {
			header.classList.add('header_active');
			partners.classList.add('imageSlider_active');
		}
		else if (Y < 57.6) {
			header.classList.remove('header_active')
			partners.classList.remove('imageSlider_active')
		}


	}
}
else {
	const partners = document.querySelector('.partners');
	partners.classList.add('imageSlider_active');
}
//</ОСНОВНОЙ БЛОК>====================================================================================================
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger , .headerMenuFixed').toggleClass('open');
	})
	$('.header__burger').click(function (event) {
		$('.header__burgerRight, .contacts ').removeClass('open');
	})
});
$(document).ready(function () {
	$('.header__burgerRight').click(function (event) {
		$('.header__burgerRight, .contacts ').toggleClass('open');
	})
	$('.header__burgerRight').click(function (event) {
		$('.header__burger , .headerMenuFixed').removeClass('open');
	})
});
//</ОСНОВНОЙ БЛОК>====================================================================================================
function from() {
	const from_element = document.querySelector('.from');
	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');
	const from_selected_input = document.querySelector('.from .from__selected .from__selected_input');
	const dates_element = document.querySelector('.date-picker .dates');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');

	from_element.addEventListener('click', function () {
		to_nameCity_element.classList.remove('active');
		dates_element.classList.remove('active');
		duration_nameCity_element.classList.remove('active');
		from_nameCity_element.classList.toggle('active');
	});

	from_nameCity_element.addEventListener('click', function (q) {
		const listItem = event.target;
		const valueCity = listItem.attributes.cName.value;
		from_selected_input.innerHTML = valueCity;
		for (let i = 0; i < from_nameCity_element.children.length; i++) {
			from_nameCity_element.children[i].classList.remove('activ');
		}
		q.target.classList.add('activ');
	});
}
from();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function to() {
	const to_element = document.querySelector('.to');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');
	const dates_element = document.querySelector('.date-picker .dates');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');
	const to_selected_input = document.querySelector('.to .to__selected .to__selected_input');


	to_element.addEventListener('click', function () {
		dates_element.classList.remove('active');
		duration_nameCity_element.classList.remove('active');
		to_nameCity_element.classList.toggle('active');
	});

	to_nameCity_element.addEventListener('click', function (q) {
		const listItem = event.target;
		const valueCity = listItem.attributes.cName.value;
		to_selected_input.innerHTML = valueCity;
		for (let i = 0; i < to_nameCity_element.children.length; i++) {
			to_nameCity_element.children[i].classList.remove('activ');
		}
		q.target.classList.add('activ');
	});
}
to();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function date_picker() {
	const date_picker_element = document.querySelector('.date-picker');
	const selected_date_element = document.querySelector('.date-picker .selected-date');
	const dates_element = document.querySelector('.date-picker .dates');
	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');


	// день тижня
	const wdy_element = document.querySelector('.date-picker .dates .weekday .wdy');
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// місяць
	const mth_element = document.querySelector('.date-picker .dates .month .mth');
	const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
	const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
	const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

	// день
	const days_element = document.querySelector('.date-picker .dates .days');

	// рік
	const yar_element = document.querySelector('.date-picker .dates .year .yar');
	const next_yar_element = document.querySelector('.date-picker .dates .year .next-yar');
	const prev_yar_element = document.querySelector('.date-picker .dates .year .prev-yar');

	// дні місяця
	const dotm_element = document.querySelector('.date-picker .dates .dayOfTheMonth .dotm');

	// кнопки
	const button = document.querySelector('.date-picker .dates .button');
	const button_сancel = document.querySelector('.date-picker .dates .button-сancel');
	const button_out = document.querySelector('.date-picker .dates .button-out');

	button.addEventListener('click', goToClick);
	button_сancel.addEventListener('click', goExit);
	button_out.addEventListener('click', goExit);



	let date = new Date();

	let weekday = date.getDay();
	let weekdayNow = date.getDay();

	let day = date.getDate();
	let dayNow = date.getDate();

	let month = date.getMonth();
	let monthNow = date.getMonth();

	let year = date.getFullYear();
	let yearNow = date.getFullYear();

	let selectedWeekday = weekday;
	let selectedDate = date;
	let selectedDay = day;
	let selectedMonth = month;
	let selectedYear = year;

	let daysInMonth_element;



	wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
	mth_element.textContent = months[month];
	dotm_element.textContent = selectedDay;
	yar_element.textContent = selectedYear;



	selected_date_element.textContent = 'Choose the date';
	selected_date_element.dataset.value = selectedDate;

	populateDates();
	checkYearAndMonths(selectedMonth);


	date_picker_element.addEventListener('click', toggleDatePicker);
	next_mth_element.addEventListener('click', goToNextMonth);
	prev_mth_element.addEventListener('click', goToPrevMonth);

	next_yar_element.addEventListener('click', goToNextYear);
	prev_yar_element.addEventListener('click', goToPrevYear);

	// FUNCTIONS
	function toggleDatePicker(e) {
		if (!checkEventPathForClass(e.path, 'dates')) {
			from_nameCity_element.classList.remove('active');
			duration_nameCity_element.classList.remove('active');
			dates_element.classList.toggle('active');
		}
	}

	//зміна місяця
	function goToNextMonth(e) {
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}

		selectedMonth = month;
		selectedYear = year;

		wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
		mth_element.textContent = months[month];
		yar_element.textContent = selectedYear;

		populateDates();
		checkYearAndMonths();
	}
	function goToPrevMonth(e) {
		month--;
		if (month < 0) {
			month = 11;
			year--;
		}

		selectedMonth = month;
		selectedYear = year;
		wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
		mth_element.textContent = months[month];
		yar_element.textContent = selectedYear;

		populateDates();
		checkYearAndMonths();
	}

	//зміна року
	function goToNextYear(e) {
		year++;

		selectedYear = year;
		wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
		yar_element.textContent = selectedYear;

		populateDates();
		checkYearAndMonths();
	}
	
	function goToPrevYear(e) {
		year--;

		selectedYear = year;
		wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
		yar_element.textContent = selectedYear;

		populateDates();
		checkYearAndMonths();
	}

	function populateDates(e) {
		days_element.innerHTML = '';

		daysInMonth_element = daysInMonth(selectedMonth, selectedYear);
		let theFirstDayOfTheMonth = lookWeekday(selectedYear, selectedMonth, 1);
		let w = 1;


		for (let i = 0; i < daysInMonth_element; i++) {

			for (; w <= theFirstDayOfTheMonth; w++) {
				console.log(theFirstDayOfTheMonth);
				const aragf = document.createElement('div');
				aragf.classList.add('aragf');
				days_element.appendChild(aragf);
			}
			if (i < (dayNow - 1) && selectedYear == yearNow && selectedMonth == monthNow) {
				const notActiveDay_element = document.createElement('div');
				notActiveDay_element.classList.add('notActiveDay');
				notActiveDay_element.textContent = i + 1;
				days_element.appendChild(notActiveDay_element);
			} else {
				const day_element = document.createElement('div');
				day_element.classList.add('day');
				day_element.textContent = i + 1;

				if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
					day_element.classList.add('selected');
				}

				day_element.addEventListener('click', function () {
					selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
					selectedDay = (i + 1);
					selectedMonth = month;
					selectedYear = year;
					selectedWeekday = weekday;
					dotm_element.textContent = selectedDay;
					wdy_element.textContent = weekdays[lookWeekday(selectedYear, selectedMonth, selectedDay)];
					populateDates();

				});

				days_element.appendChild(day_element);
			}
		}
	}

	function checkEventPathForClass(path, selector) {
		for (let i = 0; i < path.length; i++) {
			if (path[i].classList && path[i].classList.contains(selector)) {
				return true;
			}
		}

		return false;
	}

	function formatDate(d) {
		let day = d.getDate();
		if (day < 10) {
			day = '0' + day;
		}

		let month = d.getMonth() + 1;
		if (month < 10) {
			month = '0' + month;
		}

		let year = d.getFullYear();

		return month + '-' + day + '-' + year;
	}

	function checkYearAndMonths() {
		if (selectedMonth == monthNow && selectedYear == yearNow) {
			prev_mth_element.classList.add('notActivePrev');
			prev_yar_element.classList.add('notActivePrev');
		} else {
			prev_mth_element.classList.remove('notActivePrev');
			if (selectedYear == yearNow) {
				return prev_yar_element.classList.add('notActivePrev');
			} else {
				prev_yar_element.classList.remove('notActivePrev');
			}
		}
	}

	// функція визначення дня тижня
	function lookWeekday(y, m, d) {

		let de = new Date(y, m, d);
		let bdase = de.getDay();
		return bdase;
	}

	function daysInMonth(month, year) {
		return new Date(year, month + 1, 0).getDate();
	}

	function goToClick() {
		selected_date_element.textContent = formatDate(selectedDate);
		selected_date_element.dataset.value = selectedDate;
		dates_element.classList.remove('active');
	}
	function goExit() {
		dates_element.classList.remove('active');
	}

}
date_picker();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function duration() {
	const duration_element = document.querySelector('.duration');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');
	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const duration_selected_input = document.querySelector('.duration .duration__selected .duration__selected_input');
	const dates_element = document.querySelector('.date-picker .dates');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');


	duration_element.addEventListener('click', function () {
		to_nameCity_element.classList.remove('active');
		dates_element.classList.remove('active');
		from_nameCity_element.classList.remove('active');
		duration_nameCity_element.classList.toggle('active');
	});

	duration_nameCity_element.addEventListener('click', function (q) {
		const listItem = event.target;
		const valueCity = listItem.attributes.cName.value;
		duration_selected_input.innerHTML = valueCity;
		for (let i = 0; i < duration_nameCity_element.children.length; i++) {
			duration_nameCity_element.children[i].classList.remove('activ');
		}
		q.target.classList.add('activ');
	});
}
duration();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function adults() {
	const adults_selected_input = document.querySelector('.adults .adults__selected .adults__selected_input');
	const adults_selected_prev = document.querySelector('.adults .adults__selected .adults__selected_prev');
	const adults_selected_next = document.querySelector('.adults .adults__selected .adults__selected_next');

	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');
	const dates_element = document.querySelector('.date-picker .dates');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');

	let number = 2;

	adults_selected_input.innerHTML = number;

	adults_selected_next.addEventListener('click', function () {
		if (number == 10) {
			adults_selected_input.innerHTML = number;
		} else {
			number++;
			adults_selected_input.innerHTML = number;
		}
		removeClas();
	});

	adults_selected_prev.addEventListener('click', function () {
		if (number == 0) {
			adults_selected_input.innerHTML = number;
		} else {
			number--;
			adults_selected_input.innerHTML = number;
		}

		removeClas();
	});

	function removeClas() {
		from_nameCity_element.classList.remove('active');
		to_nameCity_element.classList.remove('active');
		dates_element.classList.remove('active');
		duration_nameCity_element.classList.remove('active');
	}
}
adults();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function children() {
	const children_selected_input = document.querySelector('.children .children__selected .children__selected_input');
	const children_selected_prev = document.querySelector('.children .children__selected .children__selected_prev');
	const children_selected_next = document.querySelector('.children .children__selected .children__selected_next');

	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');
	const dates_element = document.querySelector('.date-picker .dates');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');

	let number = 0;

	children_selected_input.innerHTML = number;

	children_selected_next.addEventListener('click', function () {
		if (number == 10) {
			children_selected_input.innerHTML = number;
		} else {
			number++;
			children_selected_input.innerHTML = number;
		}
		removeClas();
	});

	children_selected_prev.addEventListener('click', function () {
		if (number == 0) {
			children_selected_input.innerHTML = number;
		} else {
			number--;
			children_selected_input.innerHTML = number;
		}
		removeClas();
	});

	function removeClas() {
		from_nameCity_element.classList.remove('active');
		to_nameCity_element.classList.remove('active');
		dates_element.classList.remove('active');
		duration_nameCity_element.classList.remove('active');
	}
}
children();
//</ОСНОВНОЙ БЛОК>====================================================================================================
function but() {
	const button_element = document.querySelector('.imageSlider__forma_row .formButton');

	const from_nameCity_element = document.querySelector('.from .from__nameCity');
	const to_nameCity_element = document.querySelector('.to .to__nameCity');
	const dates_element = document.querySelector('.date-picker .dates');
	const duration_nameCity_element = document.querySelector('.duration .duration__nameCity');

	button_element.addEventListener('click', function () {
		from_nameCity_element.classList.remove('active');
		to_nameCity_element.classList.remove('active');
		dates_element.classList.remove('active');
		duration_nameCity_element.classList.remove('active');
	});
}
but();
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================
//</ОСНОВНОЙ БЛОК>====================================================================================================