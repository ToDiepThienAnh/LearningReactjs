import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAction } from '../Redux/Action/action';
import { SET_USERS, SIGNUP_USERS, UPDATE_USER } from '../Redux/Action/type';


class FormDangKy extends Component {

    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput')
        const newValues = { ...this.props.nguoiDungRedux.values }
        newValues[name] = value
        console.log(name, newValues[name]);

        // XỬ lí errors
        const newErrors = { ...this.props.nguoiDungRedux.errors }
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';

        if(typeInput == 'email'){
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }

        if(typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value)){
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }

        if(typeInput === 'text') {
            const regexNumber = /^[a-zA-Z]+$/;
            if(!regexNumber.test(value)){
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }

        this.props.dispatch({
            type: SET_USERS,
            nguoiDungRedux: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); 

        let valid = true;
        
        for(let i in this.props.nguoiDungRedux.errors){
            if(this.props.nguoiDungRedux.errors[i].trim() !== ''){
                valid = false
            }
        }
        for(let i in this.props.nguoiDungRedux.values){
            if(this.props.nguoiDungRedux.values[i].trim() === ''){
                valid = false
            }
        }
        
        if(!valid) {
            alert('Dữ liệu không hợp lệ !');
            return ;
        } 
        //Xử lý submit => api hoặc redux (dispatch) ...
        this.props.dispatch(createAction(SIGNUP_USERS, null))
    }

    render() {
        let { taiKhoan, hoTen, matKhau, soDienThoai, email, loaiNguoiDung } = this.props.nguoiDungRedux.values
        return (
            <div className='border'>
                <h1 className='text-center bg-dark text-white'>Form Đăng Ký</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='row px-2'>


                        <div className='col-6'>
                            <p>Tài Khoản</p>
                            <input typeInput='text' name="taiKhoan" value={taiKhoan} type='text' className='form-control' onChange={this.handleChangeInput}></input>
                            <p className='text-danger'>{this.props.nguoiDungRedux.errors.taiKhoan}</p>
                        </div>

                        <div className='col-6'>
                            <p>Họ tên</p>
                            <input  name="hoTen" value={hoTen} type='text' className='form-control' onChange={this.handleChangeInput}></input>
                            <p className='text-danger'>{this.props.nguoiDungRedux.errors.hoTen}</p>
                        </div>

                        <div className='col-6'>
                            <p>Mật khẩu</p>
                            <input name="matKhau" value={matKhau} type='password' className='form-control' onChange={this.handleChangeInput}></input>
                            <p className='text-danger'>{this.props.nguoiDungRedux.errors.matKhau}</p>
                        </div>

                        <div className='col-6'>
                            <p>Số điện thoại</p>
                            <input typeInput='phone' name="soDienThoai" value={soDienThoai} type='text' className='form-control' onChange={this.handleChangeInput}></input>
                            <p className='text-danger'>{this.props.nguoiDungRedux.errors.soDienThoai}</p>
                        </div>

                        <div className='col-6'>
                            <p>Email</p>
                            <input typeInput='email' name="email" value={email} type='text' className='form-control' onChange={this.handleChangeInput}></input>
                            <p className='text-danger'>{this.props.nguoiDungRedux.errors.email}</p>
                        </div>

                        <div className='col-6'>
                            <p>Loại người dùng</p>
                            <select name="loaiNguoiDung" value={loaiNguoiDung} className='form-control' onChange={this.handleChangeInput}>
                            <option >-----Chọn loại người dùng-----</option>
                                <option value='Khách hàng'>Khách hàng</option>
                                <option value='Nhân viên'>Nhân viên</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-success mr-2'>Đăng ký</button>
                        <button onClick={ ()=> this.props.dispatch(createAction(UPDATE_USER, null))} type='button' className='btn btn-primary'>Cập nhật</button>
                    </div>


                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nguoiDungRedux: state.BaiTapQuanLiNguoiDungReducer.nguoiDungRedux
    }
}

export default connect(mapStateToProps)(FormDangKy)