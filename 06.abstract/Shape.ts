abstract class Shape {
  constructor(public _x: number, public _y: number) {}

  abstract calculateArea(): number;

  getInfor(): string {
    return `Tọa độ : x=${this._x} y= ${this._y}`;
  }
}
export default Shape;
