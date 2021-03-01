class Point {
	constructor(positionX, positionY) {
		this._positionX = positionX;
		this._positionY = positionY;
	}
	get positionX() {
		return this._positionX;
	}
	set positionX(value) {
		this._positionX = value;
	}
	get positionY() {
		return this._positionY;
	}
	set positionY(value) {
		this._positionY = value;
	}
}
class Line {
	constructor(point1, point2) {
		this._point1 = point1;
		this._point2 = point2;
	}
	get point1() {
		return this._point1;
	}
	get point1X() {
		return this._point1._positionX
	}
	get point1Y() {
		return this._point1._positionY
	}
	set point1X(value) {
		this._point1._positionX = value;
	}
	set point1Y(value) {
		this._point1._positionY = value;
	}
	get point2() {
		return this._point2;
	}
	get point2X() {
		return this._point2._positionX
	}
	get point2Y() {
		return this._point2._positionY
	}
	set point2X(value) {
		this._point2._positionX = value;
	}
	set point2Y(value) {
		this._point2._positionY = value;
	}
}
class Circle extends Point {
	constructor(positionX, positionY, radius) {
		super(positionX, positionY);
		this._radius = radius;
	}
	get radius() {
		return this._radius;
	}
	set radius(value) {
		this._radius = value;
	}
}
class Ellipse extends Circle {
	constructor(positionX, positionY, radius1, radius2, angle) {
		super(positionX, positionY, radius1);
		this._radius2 = radius2;
		this._angle = angle
	}
	get radius2() {
		return this._radius2;
	}
	set radius2(value) {
		this._radius2 = value;
	}
	get angle() {
		return this._angle
	}
	set angle(value) {
		this._angle = value
	}
}
class Rectangle extends Point {
	constructor(positionX, positionY, width, height) {
		super(positionX, positionY);
		this._width = width;
		this._height = height;
	}
	get width() {
		return this._width;
	}
	set width(value) {
		this._width = value;
	}
	get height() {
		return this._height;
	}
	set height(value) {
		this._height = value;
	}
}
let points = [];
window.onload = function () {
	let typeDraw;
	let cnv = document.getElementById('myCanvas');
	let ctx = cnv.getContext('2d');
	let buttons = document.getElementsByTagName("button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			typeDraw = this.innerHTML;
		}
	}
	cnv.width = 800;
	cnv.height = 600;
	ctx.strokeStyle = "RGBA(0, 0, 0, 1)";
	ctx.lineWidth = 1;
	cnv.addEventListener('click', function (e) {
		onDraw(e, ctx, typeDraw);
	});
};
function onDraw(e, ctx, typeDraw) {
	// if (typeDraw != 'Линия') {
	// 	points = [];
	// }
	switch (typeDraw) {
		case 'Точка':
			let point = new Point(e.offsetX, e.offsetY);
			ctx.beginPath();
			ctx.arc(point.positionX, point.positionY, 1, 0, 2 * Math.PI);
			ctx.fill();
			break;
		case 'Линия':
			let linePoint = new Point(e.offsetX, e.offsetY);
			points.push(linePoint);
			if (points.length > 1) {
				ctx.beginPath();
				let line = new Line(points[0], points[1]);
				ctx.moveTo(line.point1X, line.point1Y);
				ctx.lineTo(line.point2X, line.point2Y);
				ctx.stroke();
				points = []
			}
			break;
		case 'Окружность':
			let circleRadius = prompt('Введите радиус круга:');
			let circle = new Circle(e.offsetX, e.offsetY, circleRadius);
			ctx.beginPath();
			ctx.arc(circle.positionX, circle.positionY, circle.radius, 0, 2 * Math.PI);
			ctx.stroke();
			break;
		case 'Эллипс':
			let ellipseRadius1 = prompt('Введите первый радиус:');
			let ellipseRadius2 = prompt('Введите второй радиус:');
			let ellipseAngle = prompt('Введите угол поворота:');
			let ellipse = new Ellipse(e.offsetX, e.offsetY, ellipseRadius1, ellipseRadius2, ellipseAngle);
			ctx.beginPath();
			ctx.ellipse(ellipse.positionX, ellipse.positionY, ellipse.radius, ellipse.radius2, ellipseAngle, 0, 2 * Math.PI);
			ctx.stroke();
			break;
		case 'Прямоугольник':
			let recWidth = prompt('Введите ширину прямоугольника:');
			let recHeight = prompt('Введите высоту прямоугольника:');
			let rectangle = new Rectangle(e.offsetX, e.offsetY, recWidth, recHeight);
			ctx.strokeRect(rectangle.positionX, rectangle.positionY, rectangle.width, rectangle.height);
			break;
	}
}

