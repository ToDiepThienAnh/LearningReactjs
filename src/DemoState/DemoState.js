import React, { Component } from 'react'

export default class DemoState extends Component {

// state là thuộc tính có sẵn của component => dùng để quản lí nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác (click, change, blur, ...)

    state = {
        isLogin: false
    }
    userName ='ThienAnh';
    
    renderContent = () => {
        if(this.state.isLogin){
            return <p className='display-4 text-primary'>
                Hello {this.userName}
            </p>
        }
        return <button onClick={() => { this.HandleLogin() }} className='btn btn-success'>Đăng Nhập</button>
    }

    HandleLogin = () => {
        // Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState 
        // setState() là phương thức có sẵn của lớp đối tượng component => dùng để thay đổi giá trị trong this.state đồng thời gọi lại hàm render
        
        this.setState({ isLogin: true});
    }

    render() {
        
        return (
            <div>
                <h3>If else React</h3>
        {this.renderContent()}
            </div>
        )
    }
}
