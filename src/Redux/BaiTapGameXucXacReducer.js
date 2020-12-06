const stateDefault = {
    datCuoc: false, // True tài, false xỉu
    soBanThang: 10,
    soBanChoi: 10,
    mangXucXac: [
        {hinhAnh: './img/img_game/6.png',diem:6},
        {hinhAnh: './img/img_game/6.png',diem:6},
        {hinhAnh: './img/img_game/6.png',diem:6}
    ]
}

export const BaiTapGameXucXacReducer = (state= stateDefault, action) => {
    
    
    return {...state};
}