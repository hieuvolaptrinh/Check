import Student from "./06.class2";
import School from "./School";

const mySchool = new School("đại học sư phạm ký thuật đà nẵng ");

const student1 = new Student(1, "nguyễn", "văn a", 10, true);
const student2 = new Student(2, "test ", "test", 9, true);
const student3 = new Student(3, "trần", "văn b", 8, false);
const student4 = new Student(4, "lê", "văn c", 7, true);
const student5 = new Student(5, "phạm", "văn d", 6, false);

mySchool.addStudent(student1);
mySchool.addStudent(student2);
mySchool.addStudent(student3);
mySchool.addStudent(student4);
mySchool.addStudent(student5);

// find student by id

let st1 = mySchool.getStudentById(1);
if (st1) {
	console.log(st1.getInfor());
} else {
	console.log("Student not found");
}
