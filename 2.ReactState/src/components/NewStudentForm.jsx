import { useState } from "react";

function NewStudentForm(props) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const saveStudent = () => {
    if (lastName && firstName) {
      // eslint-disable-next-line react/prop-types
      props.addStudent(firstName, lastName);
    }
  };
  return (
    <>
      <h2 className="">Thêm Sinh viên</h2>

      <div className="form-group">
        <label>Tên</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Họ đệm</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={saveStudent}>
          Lưu sinh viên
        </button>
      </div>
    </>
  );
}

export default NewStudentForm;
