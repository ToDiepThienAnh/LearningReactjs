

const stateDefault = {
    danhSachSinhVien: [
        {maSinhVien:1, tenSinhVien:"Nguyễn Văn A", email:"12321312@gmail.com",soDienThoai:"090812012"},
        {maSinhVien:2, tenSinhVien:"Nguyễn Văn B", email:"12321312@gmail.com",soDienThoai:"0921312012"}
    ],
    sinhVienSua: {
        maSinhVien:'1',
        tenSinhVien:'a',
        soDienThoai:'213213131',
        email:'2131231@gmail.com'
    },
    sinhVienRedux: {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }

    }

}


export  const FormSinhVienReducer = (state = stateDefault, action)=>{
    

    switch(action.type){
        case 'THEM_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.danhSachSinhVien,state.sinhVienRedux]
            return {...state, danhSachSinhVien:mangSinhVienCapNhat}
        }
        case 'SUA_SINHVIEN':{
            state.sinhVienSua = {...action.sinhVienSua}
            // Cập nhật lại state của form redux
            let newSinhVienRedux = {...state.sinhVienRedux}
            newSinhVienRedux.values = {...action.sinhVienSua}
            return {...state, sinhVienRedux: newSinhVienRedux }
        }
        // case 'CAPNHAT_SINHVIEN':{
        //     const mangSinhVienCapNhat = [...state.danhSachSinhVien]
        //     sinhVienCapNhat = mangSinhVienCapNhat.findIndex( sv => sv.maSinhVien === action.sv.maSinhVien)

        //     return {...state, danhSachSinhVien:mangSinhVienCapNhat}
        // }
        case 'SET_SV_REDUX':{
            state.sinhVienRedux = action.sinhVien
            return {...state}
        }
    }

    return {...state}
}

