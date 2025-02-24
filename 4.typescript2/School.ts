import Student from "./06.class2";

class School {
  private _students: Student[] = [];

  constructor(public _name: string) {}
  public addStudent(student: Student) {
    this._students.push(student);
  }

  public getStudentById(studentId: number): Student | undefined {
    let arr = this._students.filter(
      (student) => student.studentId === studentId
    );

    if (arr.length > 0) {
      return arr[0];
    }
    return undefined;
  }

  public get students(): Student[] {
    return this._students;
  }

  public set students(value: Student[]) {
    this._students = value;
  }

  public listStudent() {
    this._students.forEach((student) => {
      console.log(student.getInfor());
    });
  }
}
export default School;
