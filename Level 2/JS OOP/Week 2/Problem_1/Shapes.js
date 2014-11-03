var Shapes = (function(){
    var Shape = (function(){
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype.draw = function() {
            throw new Error('Not implemented');
        };

        Shape.prototype.toString = function() {
            return 'UI - X:' + this._x + ', Y:' + this._y + ', Color:' + this._color;
        }

        return Shape;
    }());

    var Circle = (function () {
        function Circle(x, y, color, radius) {
            Shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.prototype = new Shape();

        Circle.prototype.draw = function () {
            console.log("Drawing Circle");
        };

        Circle.prototype.toString = function () {
            return Shape.prototype.toString.apply(this) + ', Radius: ' + this._radius;
        };

        return Circle;
    }());

    var Rectangle = (function () {
        function Rectangle(x, y, color, width, height) {
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.prototype = new Shape();

        Rectangle.prototype.draw = function () {
            console.log("Drawing Rectangle");
        };

        Rectangle.prototype.toString = function () {
            return Shape.prototype.toString.apply(this) + ', Width: ' + this._width + ', Height: ' + this._height;
        };

        return Rectangle;
    }());

    var Triangle = (function () {
        function Triangle(x, y, color, x2, y2, x3, y3) {
            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.prototype = new Shape();

        Triangle.prototype.draw = function () {
            console.log("Drawing Triangle");
        };

        Triangle.prototype.toString = function () {
            return Shape.prototype.toString.apply(this) + ', X2: ' + this._x2 + ', Y2: ' + this._y2 + ', X3: ' + this._x3 + ', Y3: ' + this._y3;
        };

        return Triangle;
    }());

    var Segment = (function () {
        function Segment(x, y, color, x2, y2) {
            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Segment.prototype = new Shape();

        Segment.prototype.draw = function () {
            console.log("Drawing Segment");
        };

        Segment.prototype.toString = function () {
            return Shape.prototype.toString.apply(this) + ', X2: ' + this._x2 + ', Y2: ' + this._y2;
        };

        return Segment;
    }());

    var Point = (function () {
        function Point(x, y, color, x2, y2) {
            Shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Point.prototype = new Shape();

        Point.prototype.draw = function () {
            console.log("Drawing Point");
        };

        return Point;
    }());

    return {
        Circle: Circle,
        Point: Point,
        Triangle: Triangle,
        Rectangle: Rectangle,
        Segment: Segment
    };
}());

var point = new Shapes.Point(1, 69, "#FF0000");
console.log(point.toString());

var circle = new Shapes.Circle(1, 2, "#FF0000", 10);
console.log(circle.toString());

var triangle = new Shapes.Triangle(1, 2, "#FF0000", 22, 33, 44, 55);
console.log(triangle.toString());

var rectangle = new Shapes.Rectangle(22, 2, "#FF0000", 100, 200);
console.log(rectangle.toString());

var segment = new Shapes.Segment(1, 2, "#FF0000", 11, 22);
console.log(segment.toString());