import React from 'react'

// React function component
export default function DemoFunctionComponent() {
    return (// Nội dung thẻ chứa trong lệnh return, Lưu ý: Nội dung phải dc bao bọc bởi 1 thẻ
        <div className='container bg-dark text-white'> 
            <div className='display-4 p-5'>
                Component
            </div>
            <div className='p-2 mt-2'>
                Nội dung Component
            </div>
        </div>
    )
}

