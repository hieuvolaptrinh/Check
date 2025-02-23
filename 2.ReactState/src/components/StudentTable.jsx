import StudentItem from "./StudentItem";
import PropTypes from "prop-types";
function StudentTable(props) {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Mã Sinh Viên</th>
          <th scope="col">Họ Đệm</th>
          <th scope="col">Tên</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* <StudentItem {...students[1]} /> */}

        {props.students.map((student) => (
          <StudentItem
            key={student.studentId}
            studentId={student.studentId}
            studentLastName={student.studentLastName}
            studentFirstName={student.studentFirstName}
            deleteStudent={props.deleteStudent}
          />
        ))}
        {/* <StudentItem
          studentId="1"
          studentFirst="vo nguyen dai"
          studentLastName="hieu"
        /> */}
      </tbody>
    </table>
  );
}
StudentTable.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      studentId: PropTypes.string.isRequired,
      studentLastName: PropTypes.string.isRequired,
      studentFirstName: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteStudent: PropTypes.func.isRequired,
};
export default StudentTable;
