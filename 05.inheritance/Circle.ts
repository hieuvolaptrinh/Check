import Shape from "./Shape";

class Circle extends Shape {
  constructor(public _x: number, public _y: number, public _radius: number) {
    super(_x, _y);
  }
  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  calculateArea(): number {
    return 2 * Math.PI * this.radius;
  }

  getInfor(): string {
    return `Hình tròn ${super.getInfor()}, bán kính  ${this.radius}`;
  }
}
export default Circle;
