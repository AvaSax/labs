const items = [
	{ key: 1 },
	{ key: 2 },
	{ key: 3 },
	{ key: 4 },
	{ key: 5 },
	{ key: 6 },
	{ key: 7 },
	{ key: 8 },
	{ key: 9 },
];
let field;
let counter;
let index;
let score = 0;
window.onload = function () {
	field = this.document.getElementById('field');
	counter = this.document.getElementById('counter');
	initContent(field);
	let mainTimer = setTimeout(function sec() {
		do {
			index = Math.round(Math.random() * 10);
		} while (index === 0 || index === 10);
		let item = document.getElementById(`i${index}`);
		item.innerHTML = "<div id='red'></div>";
		let red = document.getElementById('red');
		red.addEventListener('click', () => {
			item.innerHTML = "";
			score += 2;
			counter.innerHTML = `${score}`;
		}, true);
		setTimeout(() => {
			item.innerHTML = "";
		}, 1000);
		mainTimer = setTimeout(sec, 1000);
	}, 1000);

	field.addEventListener('click', () => {
		score--;
		counter.innerHTML = `${score}`;
	}, false);
};
function initContent(elm) {
	for (let item of items) {
		let elmItem = document.createElement('div');
		elmItem.setAttribute('id', `i${item.key}`);
		elmItem.setAttribute('class', `item`);
		elm.append(elmItem);
	}
}



