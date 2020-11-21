import React from 'react'

export default function DataBinding() {

    const title = 'Cybersoft';
    const imgSrc = 'https://picsum.photos/200/200';
    const SinhVien = {
        maSV: '0001',
        tenSinhVien: 'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/200'
    }
    // binding function
    const renderImg = () => {
        // giá trị trả về 1 chuỗi ,số, jsx 
        return 
        <div>
            <h3>Hình Ảnh</h3>
            <img src={SinhVien.hinhAnh} height='200' width='200' />
        </div>
    }

    return (
        <div className='container'>
            <h3>DataBinding</h3>
            <p id='title' className='display-4'>{title}</p>
            <img src={imgSrc} width="200" height="200"></img>
            <input value={title} className='form-control w-4 mt-2'></input>
            <h3>Thông Tin Sinh Viên</h3>
            <div className="card" style={{width:200,height:200}}>
                <img className="card-img-top" src={SinhVien.hinhAnh} height='200' alt />
                <div className="card-body">
                    <h4 className="card-title">{SinhVien.maSV}</h4>
                    <p className="card-text">{SinhVien.tenSinhVien}</p>
                </div>
            </div>
        <hr />
        <div className='mt-2'>
            {renderImg()}
        </div>
        </div>
    )
}

