import PropTypes from "prop-types";
function StudentItem(props) {
  const studentId = props.studentId;
  const deleteItem = () => {
    props.deleteStudent(studentId);
  };
  return (
    <tr>
      <td>{props.studentId}</td>
      <td>{props.studentLastName}</td>
      <td>{props.studentFirstName} </td>
      <td>
        <button className="btn btn-danger" onClick={deleteItem}>
          Xóa
        </button>
      </td>
    </tr>
  );
}

StudentItem.propTypes = {
  studentId: PropTypes.number,
  studentFirstName: PropTypes.string,
  studentLastName: PropTypes.string,
};
export default StudentItem;
