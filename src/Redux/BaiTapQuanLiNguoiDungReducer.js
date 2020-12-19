import { DELETE_USERS, EDIT_USERS, SET_USERS, SIGNUP_USERS, UPDATE_USER } from "./Action/type"

const stateDefault = {
    mangThongTinNguoiDung: [],
    nguoiDungSua: {
        taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDienThoai: '',
            email: '',
            loaiNguoiDung: ''
    },
    nguoiDungRedux: {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDienThoai: '',
            email: '',
            loaiNguoiDung: ''
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDienThoai: '',
            email: '',
            loaiNguoiDung: ''
        }
    }
}

export const BaiTapQuanLiNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_USERS:{
            state.nguoiDungRedux = action.nguoiDungRedux
            return {...state}
        }
        case SIGNUP_USERS:{
            let mangNguoiDungUpdate = [...state.mangThongTinNguoiDung, state.nguoiDungRedux.values]
            return {...state, mangThongTinNguoiDung:mangNguoiDungUpdate}
        }
        case DELETE_USERS:{
            let mangNguoiDungUpdate = [...state.mangThongTinNguoiDung]
            mangNguoiDungUpdate = mangNguoiDungUpdate.filter( item => item.taiKhoan !== action.taiKhoan)
            return {...state, mangThongTinNguoiDung: mangNguoiDungUpdate}
        }
        case EDIT_USERS:{
            state.nguoiDungSua = {...action.value}

            let newNguoiDung = {...state.nguoiDungRedux}
            newNguoiDung.values = {...action.value}
            return {...state, nguoiDungRedux:newNguoiDung }
        }
        case UPDATE_USER:{
            const mangNguoiDungUpDate = [...state.mangThongTinNguoiDung];
            
            let ngUpDate = mangNguoiDungUpDate.find(user => user.taiKhoan === state.nguoiDungRedux.values.taiKhoan); 
            if(ngUpDate) {
                ngUpDate.taiKhoan = state.nguoiDungRedux.values.taiKhoan;
                ngUpDate.hoTen = state.nguoiDungRedux.values.hoTen;
                ngUpDate.soDienThoai = state.nguoiDungRedux.values.soDienThoai;
                ngUpDate.email = state.nguoiDungRedux.values.email;
                ngUpDate.loaiNguoiDung = state.nguoiDungRedux.values.loaiNguoiDung;
                ngUpDate.matKhau = state.nguoiDungRedux.values.matKhau;
            }
            state.mangThongTinNguoiDung = mangNguoiDungUpDate;
    
            return {...state};
        }
    }
    
    return {...state}
}