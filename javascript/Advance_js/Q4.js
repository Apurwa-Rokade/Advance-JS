// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override the draw method. Demonstrate polymorphism using instances of these classes.

// Base class: Shape
class Shape {
  draw() {
    console.log("Drawing a generic shape");
  }
}

// Subclass: Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

// Subclass: Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
  }
}

// Demonstrate polymorphism
const genericShape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapes = [genericShape, circle, rectangle];

shapes.forEach(shape => {
  shape.draw();
});
