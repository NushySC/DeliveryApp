let modals = document.getElementsByClassName('modal');
let modalBtns = document.getElementsByClassName('add-to-cart');
let closeBtns = document.getElementsByClassName('modal__close');

for (let modalBtn of modalBtns) {
	modalBtn.onclick = function (event) {
		document.querySelector(event.target.getAttribute('href')).style.display = 'block';
	};
}

for (let closeBtn of closeBtns) {
	closeBtn.onclick = function (event) {
		event.target.parentNode.parentNode.style.display = 'none';
	};
}

window.onclick = function (event) {
	if (event.target.classList.contains('modal')) {
		for (let modal of modals) {
			if (typeof modal.style !== 'undefined') {
				modal.style.display = 'none';
			}
		}
	}
};

window.onkeydown = function (event) {
	if (event.key == 'Escape') {
		for (let modal of modals) {
			modal.style.display = 'none';
		}
	}
};
// INGREDIENTES
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');

		let panel = this.nextElementSibling;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'block';
		}
	});
}

let slider = document.getElementById('spicy-level--slider');
let output = document.getElementById('spicy-level--value');
output.innerHTML = 'would you like your food?';

slider.oninput = function () {
	if (this.value > 80) {
		output.innerHTML = 'Super spicy';
	} else if (this.value <= 80 && this.value > 50) {
		output.innerHTML = 'Medium spicy';
	} else if (this.value <= 50 && this.value > 10) {
		output.innerHTML = 'Little spicy';
	} else {
		output.innerHTML = 'Not spicy';
	}
};
// COUNTER

// let count = 1;
// let countEl = document.getElementsByClassName('count');
// let pluses = document.getElementsByClassName('plus');
// let minuses = document.getElementsByClassName('minus');

// for (i = 0; i < countEl.length; i++) {
// 	countEl[i].addEventListener('click', function () {
// 		for (i = 0; i < pluses.length; i++) {
// 			plus[i].addEventListener('click', function () {
// 				count++;
// 				countEl.value = count;
// 			});
// 		}

// 		for (i = 0; i < minuses.length; i++) {
// 			minus[i].addEventListener('click', function () {
// 				if (count > 1) {
// 					count--;
// 					countEl.value = count;
// 				}
// 			});
// 		}
// 	});
// }
