class Student {
  // properties
  private _studentId: number;
  private _lastName: string;
  private _firstName: string;
  private _grade: number;
  _isEnrolled: boolean;
  // contructor

  constructor(
    studentId: number,
    lastName: string,
    firstName: string,
    grade: number,
    isEnrolled: boolean
  ) {
    this._studentId = studentId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._grade = grade;
    this._isEnrolled = isEnrolled;
  }
  // getter/setter
  public getInfor(): string {
    return `Id : ${this._studentId},
      Name ${this._firstName} ${this._lastName},
      Grade : ${this._grade},
      Enrolled :${this._isEnrolled ? "Yes" : "No"}`;
  }

  // mặt định nó là public
  public getStudenId(): number {
    return this._studentId;
  }

  public setStudentId(newStudentId: number) {
    if (newStudentId > 0) {
      this._studentId = newStudentId;
    } else {
      console.log("Student Id must be greater than 0");
    }
  }

  // cách viết nhanh theo kiểu mới
  // accessor get và set, tên thuộc tính (properties sử dụng dấu _) để tránh trùng với tên hàm

  public get studentId(): number {
    return this._studentId;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get grade(): number {
    return this._grade;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public set grade(value: number) {
    this._grade = value;
  }
}

//

const student1 = new Student(1, "nguyễn", "văn a", 10, true);
console.log(student1.getInfor());

// sử dụng getter và setter
console.log(student1.getStudenId());
student1.setStudentId(9);
console.log(student1.getStudenId());
student1.setStudentId(-6);
console.log(student1.getStudenId());

// sử dụng accesssor
const student2 = new Student(2, "test ", "test", 9, true);

console.log(student2.getInfor());
student2.firstName = "Hiếu"; // thực chất ở đây là nó sẽ gọi phương thức set
console.log(student2.getInfor());
