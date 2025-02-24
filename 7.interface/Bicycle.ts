import IVehicle from "./IVehicle";
import IColor from "./IColor";
class Bicycle implements IVehicle, IColor {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }
  colorName: string;
  red: number;
  green: number;
  blue: number;
  getColor(): string {
    return `${this.colorName}:  (${this.red}, ${this.green}, ${this.blue})`;
  }
  start() {
    console.log("Bicycle is started");
  }
  end() {
    console.log("Bicycle is ended");
  }
}
