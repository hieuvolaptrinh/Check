import Shape from "./Shape";

class Rectangle extends Shape {
  constructor(
    public _x: number,
    public _y: number,
    public width: number,
    public height: number
  ) {
    super(_x, _y);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
  getInfor(): string {
    return `Hình chữ nhật ${super.getInfor()}, chiều rộng ${
      this.width
    }, chiều dài ${this.height}`;
  }
}
export default Rectangle;
