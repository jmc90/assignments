import React from 'react'


const Box = ({color, title, subtitle, information}) => {
    return (
        <div className='box' style={{backgroundColor: color}}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{information}</p>
        </div>
    )
}

export default Box