const stateDefault = {
    mangTuXi: [
        {ma:'keo', hinhAnh: './img/img_keobuabao/keo.png', datCuoc: true},
        {ma:'bua', hinhAnh: './img/img_keobuabao/bua.png', datCuoc: false},
        {ma:'bao', hinhAnh: './img/img_keobuabao/bao.png', datCuoc: false}
    ],
    soBanThang: 11,
    soBanChoi: 11,
    computer: {ma:'keo', hinhAnh: './img/img_keobuabao/keo.png'}
}

export const BaiTapGameOanTuTiReducer = (state= stateDefault, action) => {

    return {...state}
}