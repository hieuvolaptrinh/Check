import Car from "./Car";
import IColor from "./IColor";
import IVehicle from "./IVehicle";

const myVehicle: IVehicle = new Car("Toyota", 200, "đỏ", 4, 2, 98);
const myColor: IColor = new Car("Toyota", 200, "đỏ", 4, 2, 98);
// myVehicle chỉ có những phương thức của lớp vehicle
myVehicle.start();
myVehicle.end();

console.log(myColor.getColor());
// như thế này là thằng myColor chỉ có các phương thức của interface IColor
myColor.getColor();

const myCar = new Car("Toyota", 200, "đỏ", 4, 2, 98);

myCar.getColor();
myCar.start();
myCar.end();
