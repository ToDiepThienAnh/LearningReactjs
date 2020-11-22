 import './App.css';
import BaiTapLLayout from './Components/BaiTapLayout/BaiTapLLayout';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import DataBinding from './DataBinding/DataBinding';
import DataBindingClassComponent from './DataBinding/DataBindingClassComponent';
import BaiTapChonXe from './DemoState/BaiTapChonXe';
import DemoState from './DemoState/DemoState';
import HandleEvent from './HandleEvent/HandleEvent';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
        {/* <DataBinding></DataBinding>, */}
        {/* <DataBindingClassComponent></DataBindingClassComponent> */}
        {/* <HandleEvent></HandleEvent> */}
        {/* <DemoState></DemoState> */}
        {/* <BaiTapChonXe></BaiTapChonXe> */}
        <RenderWithMap></RenderWithMap>

    </div>
  );
}

export default App;
