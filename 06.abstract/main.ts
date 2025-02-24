import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Shape from "./Shape";

// const shape1 = new Shape(2, 3);
// console.log(shape1.getInfor());

const circle = new Circle(1, 2, 3);

console.log(circle.getInfor());
console.log(circle.getArea());

const rectangle = new Rectangle(1, 2, 3, 4);
console.log(rectangle.getInfor());
console.log(rectangle.calculateArea());
