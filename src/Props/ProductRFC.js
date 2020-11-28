import React from 'react'



// React Function component nhận prop là tham số đầu vào của hàm component
export default function ProductRFC(prop) {

    // bóc tách phần tử
    let {name, price} = prop;


    return (
        <div className="card text-white bg-primary">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
    <p className="card-text">{price}</p>
            </div>
        </div>

    )
}
