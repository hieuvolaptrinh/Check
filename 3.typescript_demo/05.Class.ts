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
  // accessor get và set, tên thuộc tính (properties sử dụng dấu _)
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
