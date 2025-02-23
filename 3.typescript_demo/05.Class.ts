class Student {
  // properties
  private studentId: number;
  private lastName: string;
  private firstName: string;
  private grade: number;

  isEnrolled: boolean;
  // contructor

  constructor(
    studentId: number,
    lastName: string,
    firstName: string,
    grade: number,
    isEnrolled: boolean
  ) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.isEnrolled = isEnrolled;
  }
  // getter/setter
  public getInfor(): string {
    return `Id : ${this.studentId},
      Name ${this.firstName} ${this.lastName},
      Grade : ${this.grade},
      Enrolled :${this.isEnrolled ? "Yes" : "No"}`;
  }

  // mặt định nó là public
  public getStudenId(): number {
    return this.studentId;
  }

  public setStudentId(newStudentId: number) {
    if (newStudentId > 0) {
      this.studentId = newStudentId;
    } else {
      console.log("Student Id must be greater than 0");
    }
  }

  // cách viết nhanh theo kiểu mới
  // accessor get và set
  
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
