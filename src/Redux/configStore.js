// Đây là file quản lí tất cả state của ứng dụng thay vì đặt tại compoent ta đặt state tại store

import {combineReducers, createStore} from 'redux';
import { BaiTapGameXucXacReducer } from './BaiTapGameXucXacReducer';
import { GioHangReducer } from './GioHangReducer';
import { FormSinhVienReducer } from './FormSinhVienReducer';
import { BaiTapQuanLiNguoiDungReducer } from './BaiTapQuanLiNguoiDungReducer';

// const stateGioHang = {
//     gioHang: [
//         {
//             "maSP": 1,
//             "tenSP": "VinSmart Live",
//             "manHinh": "AMOLED, 6.2\", Full HD+",
//             "heDieuHanh": "Android 9.0 (Pie)",
//             "cameraTruoc": "20 MP",
//             "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
//             "ram": "4 GB",
//             "rom": "64 GB",
//             "donGia": 5700000,
//             "soLuong": 5,
//             "hinhAnh": "./img/sp_vivo850.png"
//           }
//     ]
// }

const rootReducer = combineReducers({
    // Các state sau này khai báo tại đây
    stateGioHang: GioHangReducer,
    stateXucXac: BaiTapGameXucXacReducer,
    stateDanhSachSinhVien: FormSinhVienReducer,
    BaiTapQuanLiNguoiDungReducer
    }
)


// Tạo ra store chứa rootReducer xem như state tổng của ứng dựng
export const store = createStore(rootReducer);

