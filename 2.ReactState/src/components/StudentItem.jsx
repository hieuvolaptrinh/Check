import PropTypes from "prop-types";
function StudentItem(props) {
  return (
    <tr>
      <td>{props.studentId}</td>
      <td>{props.studentLastName}</td>
      <td>{props.studentFirstName} </td>
    </tr>
  );
}

StudentItem.propTypes = {
  studentId: PropTypes.string,
  studentFirstName: PropTypes.string,
  studentLastName: PropTypes.string,
};
export default StudentItem;
