import React from 'react'

const Die = (props) => {
    return (
        <div onClick={() => props.selectDie(props.name)}>
            {props.dice}
        </div>
    )
}


export default Die
