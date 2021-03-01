//Вызов функции
window.onload = function() {
	cicle(arr, 0);
}

//Массив объектов
let arr = [
	{id: 2, name: "Организация", parent_id: null},
	{id: 3, name: "Бухгалтерия", parent_id: 2},
	{id: 6, name: "Отдел охраны", parent_id: 2},
	{id: 7, name: "Караульная служба", parent_id: 6},
	{id: 8, name: "Бюро пропусков", parent_id: 6},
	{id: 12, name: "Патентный отдел", parent_id: 2},
	{id: 13, name: "Лётная служба", parent_id: 2},
	{id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
	{id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
	{id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
	{id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
	{id: 21, name: "Лётно-методический отдел", parent_id: 13}
]

//Основная функция
function cicle(arr, num) {	

	//Переменная для создания блока, где будет отображаться текст
	let item = document.createElement("div");
	
	let parid = null;	
	let obj;	
	
	obj = Object.create(arr[num]);	
	item.innerHTML = obj.name + "<br>";
	document.body.appendChild(item);
	
	
	//Цикл перебора каждого объекта
	for(let c = num+1; c<arr.length; c++) {
		obj = Object.create(arr[c]);
		parid = obj.parent_id;
		
		//Цикл для поиска родителя объекта (перебор всех предыдущих объектов с проверкой parent_id = id)
		let checker = false;
		for(let i = num; i<c; i++) {
			let prevobj = Object.create(arr[i]);
			if(parid == prevobj.id) checker = true;
			else continue;
		}		
		//Отображение объекта в случае наличии родителя
		if(checker) {
			item = document.createElement("div");
			item.style.marginLeft = obj.parent_id * 5 + "px";
			item.innerHTML += obj.name + "<br>";
			document.body.appendChild(item);
		}	
		//Отображение объекта в случае отсутствия родителя
		else {
			item = document.createElement("div");
			item.innerHTML += obj.name + "<br>";		
			document.body.appendChild(item);
		}
	}
	
}