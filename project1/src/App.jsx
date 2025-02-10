import "./App.css";
function App() {
  return (
    <>
      <div className="Container mt-5">
        <h1 className="cardHeader">Danh Sách Sinh Viên</h1>
        <div className="card">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Mã Sinh Viên</th>
                <th scope="col">Họ Đệm</th>
                <th scope="col">Tên</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Võ Nguyễn Đại</td>
                <td>Hiếu</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nguyễn Thị</td>
                <td>Thu</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Trần Văn</td>
                <td>Thành</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
