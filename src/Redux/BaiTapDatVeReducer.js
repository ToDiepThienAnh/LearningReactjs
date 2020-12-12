const stateDefault = {
    danhSachDangDat: [
        

    ]
}


export const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'DAT_GHE':{
            let danhSachGheDangDat = [...state.danhSachDangDat]

            let index = danhSachGheDangDat.findIndex( gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index !== -1){
                danhSachGheDangDat.splice(index, 1);
            } else {
                danhSachGheDangDat.push(action.ghe)
            }
            state.danhSachDangDat = danhSachGheDangDat
            return {...state}
        }

        case 'HUY_GHE':{
            let danhSachGheDangDat = [...state.danhSachDangDat]

            let index = danhSachGheDangDat.findIndex( gheDangDat => gheDangDat.soGhe === action.soGhe)
            if(index !== -1){
                danhSachGheDangDat.splice(index, 1);
            }
            state.danhSachDangDat = danhSachGheDangDat
            return {...state}
        }
        default: return {...state}
    }
}

