import { useState } from "react";
import "./App.css";
import StudentTable from "./components/StudentTable";
import NewStudentForm from "./components/NewStudentForm";
function App() {
  const [students, setStudent] = useState([
    {
      studentId: 1,
      studentLastName: "nguyen thi",
      studentFirstName: "nu",
    },
    {
      studentId: 2,
      studentLastName: "nguyen van",
      studentFirstName: "nam",
    },
    {
      studentId: 3,
      studentLastName: "vo nguyen dai",
      studentFirstName: "hieu",
    },
    {
      studentId: 4,
      studentLastName: "nguyen thi",
      studentFirstName: "nu",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addStudent = (firstName, lastName) => {
    const newStudent = {
      studentId: students.length + 1,
      studentLastName: lastName,
      studentFirstName: firstName,
    };
    setStudent([...students, newStudent]);
  };
  // delete a student
  const deleteStudent = (studentId) => {
    const updatedStudent = students.filter(
      (student) => student.studentId !== studentId
    );
    setStudent(updatedStudent);
    console.log("đã xóa một sinh viên");
  };

  return (
    <>
      <div className="Container mt-5">
        <div className="card">
          <h1 className="card-header">Danh Sách Sinh Viên</h1>
          <div className="card-body">
            <StudentTable students={students} deleteStudent={deleteStudent} />
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? " Đóng" : "Mở"}
            </button>

            {showForm && <NewStudentForm addStudent={addStudent} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
