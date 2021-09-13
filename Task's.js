/* Factorial */
function get_answers() {
	let n = document.getElementById("num").value;
	document.getElementById("answer1").innerHTML = "Рекурсивно: " + factorial(n);

	var x = n;
	for (var i = 1; i < n; i++) {
		x *= n - i;
	}

	document.getElementById("answer2").innerHTML = "Не рекурсивно: " + x;
}

function factorial(x) {
	return x > 1 ? x * factorial(x-1) : x;
}





/* Class_Proto */
let figure = {
	name: "figure",
	type: "2Dfigure",
	size: { },
	set Size(_size) { 
		if (!_size) { 
			console.log("Стороны должны быть больше '0'");
			alert("Стороны должны быть больше '0'");
			return 0; } 
		for (var i = 0; i < _size.length; i++) {
			if (_size[i] <= 0) {
				alert("Стороны должны быть больше '0'");
				return 0;
			}
		}
		this.size = _size;
	},
	get Name() { return this.name; },
};
let square = {
	name: "Квадрат",
	size: { },
	get Area() {
		if (this.size.length == 0){ return 0; } 
		return (this.size * this.size).toFixed(2);
	},
};
let rectangle = {
	name: "Прямоугольник",
	size: { },
	get Area() {
		if (!this.size) { return 0; } 
		return (this.size[0] * this.size[1]).toFixed(2);
	},
};
let triangle = {
	name: "Треугольник",
	size: { },
	get Area() {
		if (this.size.length == 0){ return 0; } 
		var p = (+this.size[0] + +this.size[1] + +this.size[2]) / 2;
		var s = p 
		*(p - this.size[0])
		*(p - this.size[1])
		*(p - this.size[2]);
		if (s <= 0) {
			alert("Такого треугольника не может существовать");
			return 0;
		}
		return Math.sqrt(s).toFixed(2);
	},
}

square.__proto__ = figure;
rectangle.__proto__ = square;
triangle.__proto__ = figure;

window.addEventListener("load", function(event) { print(); get_answers(); });

function print() {
	if (document.getElementById("square_size").value == null ||
		document.getElementById("rectangle_size").value == null ||
		document.getElementById("triangle_size").value == null) {
		alert("Не все поля заполнены");
		return;
	}
	var r = /[\d|.\+]+/g;
	var string = document.getElementById("square_size").value;
	var matches = string.match(r);
	square.Size = matches;
	square.name = document.getElementById("square_name").value;
	document.getElementById("square_name_print").innerHTML = square.Name;
	document.getElementById("square_type").innerHTML = square.type;
	document.getElementById("square_area").innerHTML = square.Area;

	r = /[\d|.\+]+/g;
	string = document.getElementById("rectangle_size").value;
	matches = string.match(r);
	rectangle.Size = matches;
	rectangle.name = document.getElementById("rectangle_name").value;
	document.getElementById("rectangle_name_print").innerHTML = rectangle.Name;
	document.getElementById("rectangle_type").innerHTML = rectangle.type;
	document.getElementById("rectangle_area").innerHTML = rectangle.Area;

	r = /[\d|.\+]+/g;
	string = document.getElementById("triangle_size").value;
	matches = string.match(r);
	triangle.Size = matches;
	triangle.name = document.getElementById("triangle_name").value;
	document.getElementById("triangle_name_print").innerHTML = triangle.Name;
	document.getElementById("triangle_type").innerHTML = triangle.type;
	document.getElementById("triangle_area").innerHTML = triangle.Area;
}





function module() {
	var modulePattern = (function() {
		'use strict';

		var _privateProperty = document.getElementById("private").value;;
		var publicProperty = document.getElementById("public").value;

		function _privateMethod() {
			return _privateProperty;
		}

		function publicMethod() {
			return _privateMethod();
		}

		return {
			publicMethod: publicMethod,
			publicProperty: publicProperty
		};
	})();

	document.getElementById("public_method").innerHTML = modulePattern.publicMethod();
	document.getElementById("_public").innerHTML = modulePattern.publicProperty;
	document.getElementById("_private").innerHTML = modulePattern._privateProperty;
	document.getElementById("private_method").innerHTML = "TypeError";
	console.log(modulePattern._privateMethod());
}