class Student {
  //   parameter properties : không cần khai báo thuộc tính ở bên ngoài

  constructor(
    private _studentId: number,
    private _lastName: string,
    private _firstName: string,
    private _grade: number,
    private _isEnrolled: boolean
  ) {
    // không cần gán dữ liệu ở đây
  }

  //   generate getter and setter : ctrl + shift + p => generate getter and setter

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

const student1 = new Student(1, "nguyễn", "văn a", 10, true);
