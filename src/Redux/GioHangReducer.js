const stateGioHang = {
    gioHang: []
    // [
    //     {
    //         "maSP": 1,
    //         "tenSP": "VinSmart Live",
    //         "manHinh": "AMOLED, 6.2\", Full HD+",
    //         "heDieuHanh": "Android 9.0 (Pie)",
    //         "cameraTruoc": "20 MP",
    //         "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    //         "ram": "4 GB",
    //         "rom": "64 GB",
    //         "donGia": 5700000,
    //         "soLuong": 1,
    //         "hinhAnh": "./img/sp_vivo850.png"
    //       }
    // ]
}

export const GioHangReducer= (state= stateGioHang, action) =>{
    console.log(action);
    switch(action.type){
        case 'THEM_GIO_HANG': {
            // Xử lí cập nhật state.gioHang
            let gioHangCapNhat = [...state.gioHang];
            // tìm trong giỏ hàng có sản phẩm nào có mã = mã spClick hay k
            let spGioHang = gioHangCapNhat.find( sp => sp.maSP === action.sanPhamClick.maSP);
            if(spGioHang) {
                // t ìm thấy => tăng số lượng sản phẩm
                spGioHang.soLuong += 1;
            } else{
                gioHangCapNhat.push(action.sanPhamClick)
            }
            // Cập nhật lại state
            state.gioHang = gioHangCapNhat;
            console.log(state);
            // immutable tính bất biến của redux giá trị state mới trả về phải khác state cũ
            return {...state};
        }
        case 'XOA_GIO_HANG': {
            // Tìm trong giỏ hàng có mã giống vs mã sản phẩm click k
            let gioHangCapNhat = [...state.gioHang]
            // let index = gioHangCapNhat.findIndex( sp => sp.maSP === action.maSPXoa)
            // if( index !== -1){
            //     gioHangCapNhat.splice(index, 1);
            // }
            // Tạo ra ra gioHang mới mà k có mã sản phẩm đc click

            gioHangCapNhat = gioHangCapNhat.filter( sp => sp.maSP !== action.maSPXoa);
            // // Cập nhật lại state giỏ hàng
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'TANG_GIAM_SOLUONG': {
            const gioHangCapNhat = [...state.gioHang]

            let spGioHang = gioHangCapNhat.find( sp => sp.maSP === action.maSPClick);
            if( spGioHang){
                spGioHang.soLuong += action.soLuong;
            }

            state.gioHang = gioHangCapNhat;
            return {...state};
        }
    }
    return state;
}