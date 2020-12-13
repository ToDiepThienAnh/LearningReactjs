// import React, { Component } from 'react'
// import { connect } from 'react-redux'


// class FormSinhVien extends Component {

//     state = {
//         values: {
//             maSinhVien: '',
//             tenSinhVien: '',
//             email: '',
//             soDienThoai: ''
//         },
//         errors: {
//             maSinhVien: '',
//             tenSinhVien: '',
//             email: '',
//             soDienThoai: ''
//         }

//     }

//     handleChangeInput = (event) => {
//         let { value, name } = event.target
//         // Xử lí cập nhật values
//         const newValues = { ...this.state.values } // lưu lại các giá trị trc người dùng đã nhập
//         newValues[name] = value; // Gán giá trị mới cho thuộc tính đang nhập

//         // Xử lí cập nhật errors
//         const newErrors = { ...this.state.errors }
//         newErrors[name] = value.trim() === '' ? name + ' Không được bỏ trống' : '';
//         // lấy thuộc tính người dùng tự thêm trên thẻ
//         let typeInput = event.target.getAttribute('typeInput')
//         // console.log(typeInput);

//         if (typeInput === 'email') {
//             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (!re.test(value)) {
//                 newErrors[name] = name + ' Không đúng định dạng'
//             }
//         }
//         if (typeInput === 'phone') {
//             const regexNumber = /^[0-9]+$/;
//             if (!regexNumber.test(value)) {
//                 newErrors[name] = name + ' không đúng định dạng !'
//             }
//         }

//         this.setState({
//             values: newValues,
//             errors: newErrors
//         }, () => {
//             console.log(this.state);
//         })
//     }
//     componentWillReceiveProps(newProps){
//         // lấy props từ redux gán vào state của component
//         this.setState({
//             values: newProps.sinhVienSua
//         })
//         // Sau đó binding giá trị này lên giao diện từ state
//     }

//     handleSubmit = (event) => {
//         event.preventDefault(); // chặn sự kiện submit của browser khi người dùng submit = react form
//         // Kiểm tra dữ liệu người dùng hợp lệ mới cho submit
//         let valid = true;
//         // Duyệt tất cả thuộc tính của object
//         for (let key in this.state.values) {
//             if (this.state.values[key].trim() === '') {
//                 valid = false;
//             }
//         }

//         for (let key in this.state.errors) {
//             if (this.state.errors[key].trim() !== '') {
//                 valid = false;
//             }
//         }

//         if (!valid) {
//             alert('Dữ liệu không hợp lệ')
//             return
//         }

//         // Xử lí submit => api hoặc redux (dispatch)
//         this.props.dispatch({
//             type: 'THEM_SINH_VIEN',
//             sinhVien: this.state.values
//         })

//     }

//     render() {
//         // Bóc tách phần tử es6 từ this.props.sinhVienSua
//         let {maSinhVien, tenSinhVien, email, soDienThoai} = this.state.values
//         return (
//             <form className="card" onSubmit={this.handleSubmit}>
//                 <div className='card-header bg-dark text-white'>
//                     <h1>Thông Tin Sinh Viên</h1>
//                 </div>
//                 <div className="card-body">
//                     <div className='row'>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <p>Mã Sinh Viên</p>
//                                 <input onChange={this.handleChangeInput} value={maSinhVien} name='maSinhVien' type='text' className='form-control'></input>
//                                 <p className='text-danger'>{this.state.errors.maSinhVien}</p>
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <p>Họ Tên</p>
//                                 <input value={tenSinhVien} onChange={this.handleChangeInput} name='tenSinhVien' type='text' className='form-control'></input>
//                                 <p className='text-danger'>{this.state.errors.tenSinhVien}</p>
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <p>Số Điện Thoại</p>
//                                 <input value={soDienThoai} typeInput='phone' onChange={this.handleChangeInput} name='soDienThoai' type='text' className='form-control'></input>
//                                 <p className='text-danger'>{this.state.errors.soDienThoai}</p>
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <div className='form-group'>
//                                 <p>Email</p>
//                                 <input value={email} typeInput='email' onChange={this.handleChangeInput} name='email' type='text' className='form-control'></input>
//                                 <p className='text-danger'>{this.state.errors.email}</p>
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <button type="submit" className='btn btn-success'>Thêm Sinh Viên</button>
//                             <button onClick={ ()=> {this.props.dispatch({
//                                 type: 'CAPNHAT_SINHVIEN',
//                                 sv: this.state.values
//                             })}} type="button" className='btn btn-primary'>Cập Nhật Sinh Viên</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//         )
//     }
// }

// const mapStateToProps = (state) => ({ sinhVienSua: state.stateDanhSachSinhVien.sinhVienSua})

// export default connect(mapStateToProps)(FormSinhVien)