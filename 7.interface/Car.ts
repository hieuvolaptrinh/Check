import IColor from "./IColor";
import IVehicle from "./IVehicle";

class Car implements IVehicle, IColor {
  brand: string;
  speed: number;
  colorName: string;
  red: number;
  green: number;
  blue: number;
  constructor(
    brand: string,
    speed: number,
    colorName: string,
    red: number,
    green: number,
    blue: number
  ) {
    this.brand = brand;
    this.speed = speed;
    this.colorName = colorName;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  start() {
    console.log(`car  ${this.brand} is starting`);
  }
  end() {
    console.log(`car  ${this.brand} is ending`);
  }
  getColor() {
    console.log(`car  ${this.brand} has color ${this.colorName}`);
  }
}
export default Car;
