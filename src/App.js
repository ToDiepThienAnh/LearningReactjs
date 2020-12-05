 import './App.css';
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang';
// import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapDanhSachPhim from './Components/BaiTapDanhSachPhim/BaiTapDanhSachPhim';
import BaiTapLLayout from './Components/BaiTapLayout/BaiTapLLayout';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
        {/* <BaiTapGioHangRedux></BaiTapGioHangRedux> */}
        <BaiTapGioHang></BaiTapGioHang>
    </div>
  );
}

export default App;
