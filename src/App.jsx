import "./App.css";
import StudentTable from "./components/StudentTable";

function App() {
  const students = [
    {
      studentId: "1",
      studentLastName: "nguyen thi",
      studentFirstName: "nu",
    },
    {
      studentId: "2",
      studentLastName: "nguyen van",
      studentFirstName: "nam",
    },
    {
      studentId: "3",
      studentLastName: "vo nguyen dai",
      studentFirstName: "hieu",
    },
    {
      studentId: "4",
      studentLastName: "nguyen thi",
      studentFirstName: "nu",
    },
  ];
  const addStudent = () => {
    const newStudent = {
      studentId: "5",
      studentLastName: "Sinh viên test",
      studentFirstName: "Sinh viên test",
    };
    students.push(newStudent);
    console.log(students);
  };
  return (
    <>
      <div className="Container mt-5">
        <div className="card">
          <h1 className="card-header">Danh Sách Sinh Viên</h1>
          <div className="card-body">
            <StudentTable students={students} />
            <button className="btn btn-primary" onClick={addStudent}>
              THêm sinh viên
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
