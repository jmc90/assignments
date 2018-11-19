import React from 'react'

const Friend = ({name}) => {

    const styles = { fontSize: 20 }

    const logName = () => console.log(name)

    return (
        <div onClick={logName}>
            <p style={styles}>{name}</p>
        </div>
    )
}

export default Friend