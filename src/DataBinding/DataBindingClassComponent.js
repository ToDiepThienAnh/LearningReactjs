import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    // khai báo lớp đối tượng ở ngoài render()
    SinhVien = {
        ma: '0001',
        ten: 'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPic = () => {
        return <img src={this.SinhVien.hinhAnh} width='300' height='300' alt='321'/>;
    }

    render() {
        const title = 'Front end 54';
        const renderTitle = () => {
            return <p className='text-danger'>{title}</p>
        }


        return (
            <div className='container'>
                <h3>React data binding class component</h3>
            <p>Tiêu đề: {title}</p>
            {renderTitle()}
            <h3>Thông tin sinh viên</h3>
            <ul>
        <li>Mã sinh viên: {this.SinhVien.ma}</li>
        <li>Tên sinh viên: {this.SinhVien.ten}</li>
        <li><img src={this.SinhVien.hinhAnh} width='200' height='200' alt=''/>
</li>
        <li>{this.renderPic()}</li>
            </ul>
            </div>
        )
    }
}
