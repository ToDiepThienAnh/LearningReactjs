import React, { Component } from 'react'
// React Class Component
export default class DemoReactClassComponent extends Component {
    // khai báo nhiều thuộc tính và phương thức khác

    // render là phương thức chứa nội dung giao diện thẻ
    render() {
        return (
            <div>
                <nav className="nav nav-tabs nav-stacked">
                    <a className="nav-link active" href="#">Active link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" href="#">Disabled link</a>
                </nav>
            </div>

        )
    }
}
