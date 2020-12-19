 import './App.css';
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapDanhSachPhim from './Components/BaiTapDanhSachPhim/BaiTapDanhSachPhim';
import BaiTapLLayout from './Components/BaiTapLayout/BaiTapLLayout';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import DataBinding from './DataBinding/DataBinding';
import BaiTapQuanLiSinhVien from './Form/BaiTapQuanLiSinhVien/BaiTapQuanLiSinhVien';
import DemoPureComponent from './PureComponent/DemoPureComponent';
import React_LifeCycle from './React_LifeCycle/React_LifeCycle';
import RequestApi from './RequestApi/RequestApi';

function App() {
  return (
    <div className="App">
        <RequestApi></RequestApi>
    </div>
  );
}

export default App;
