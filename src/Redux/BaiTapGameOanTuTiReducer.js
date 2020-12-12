const stateDefault = {
    mangTuXi: [
        {ma:'keo', hinhAnh: './img/img_keobuabao/keo.png', datCuoc: true},
        {ma:'bua', hinhAnh: './img/img_keobuabao/bua.png', datCuoc: false},
        {ma:'bao', hinhAnh: './img/img_keobuabao/bao.png', datCuoc: false}
    ],
    ketQua: 'I am Iron man, I love you 3000 !!!',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'keo', hinhAnh: './img/img_keobuabao/keo.png'}
}

export const BaiTapGameOanTuTiReducer = (state= stateDefault, action) => {
    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
            let mangCuocUpdate = [...state.mangTuXi]
            mangCuocUpdate = mangCuocUpdate.map((value, index) =>{
                return {...value,datCuoc:false}
            })
            
            let index = mangCuocUpdate.findIndex( item => item.ma === action.maCuoc)
            if(index !== -1){
                mangCuocUpdate[index].datCuoc = true;
            }
            state.mangTuXi = mangCuocUpdate;
            return {...state}
        }
        case 'RANDOM': {

           let soNgauNhien = Math.floor(Math.random() * 3)
           let quanCuocNgauNhien = state.mangTuXi[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            console.log("Quân cược ngẫu nhiên", state.computer);


           return {...state}
        }
        case 'ENDGAME': {
            let player = state.mangTuXi.find( item => item.datCuoc === true)
            let computer = state.computer

            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau'
                    } else if( computer.ma === 'bua'){
                        state.ketQua = 'thua'
                    } else {
                        state.ketQua = 'win'
                        state.soBanThang +=1
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau'
                    } else if( computer.ma === 'bao'){
                        state.ketQua = 'thua'
                    } else {
                        state.ketQua = 'win'
                        state.soBanThang +=1
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'bao'){
                        state.ketQua = 'hòa nhau'
                    } else if( computer.ma === 'keo'){
                        state.ketQua = 'thua'
                    } else {
                        state.ketQua = 'win'
                        state.soBanThang +=1
                    }
                    break;
                default: state.ketQua = ' win'
                return {...state}
            }
            state.soBanChoi +=1
        }
    }
     return {...state}
}