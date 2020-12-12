const stateDefault = {
    datCuoc: true, // True tài, false xỉu
    soBanThang: 10,
    soBanChoi: 20,
    mangXucXac: [
        {hinhAnh: './img/img_game/6.png',diem:6},
        {hinhAnh: './img/img_game/6.png',diem:6},
        {hinhAnh: './img/img_game/6.png',diem:6}
    ]
}

export const BaiTapGameXucXacReducer = (state= stateDefault, action) => {
    
    switch(action.type){
        case 'DAT_CUOC':{
            let mangDatCuoc = {...state}
            mangDatCuoc.datCuoc = action.maCuoc;
            state = mangDatCuoc;
            return {...state}
        }
        case 'RANDOM_XUCXAC':{
            
        }
    }
    return {...state};
}