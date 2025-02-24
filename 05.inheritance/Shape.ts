class Shape {
  constructor(public _x: number, public _y: number) {}

  calculateArea(): number {
    return 0;
  }

  getInfor(): string {
    return `Tọa độ : x=${this._x} y= ${this._y}`;
  }
}
export default Shape;
