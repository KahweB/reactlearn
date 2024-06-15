import React from 'react'

function product(props) {

    return (
        <>
            <div>
                <div>isim: {props.productName}</div>
                <div>fiyat: {props.price}</div>
            </div>
            <br />
        </>
    )
}

export default product