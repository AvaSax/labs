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
	constructor(positionX, positionY, radius1, radius2) {
		super(positionX, positionY, radius1);
		this._radius2 = radius2;
	}
	get radius2() {
		return this._radius2;
	}
	set radius2(value) {
		this._radius2 = value;
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

