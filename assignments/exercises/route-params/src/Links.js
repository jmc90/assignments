import React from 'react'
import { Link } from 'react-router-dom'


const Links = props => {
    console.log(props)
    return (
        <div>
            { props.todos.map(todo => 
                <div>
                    <Link to={`/${todo._id}`}>{todo.title}</Link>
                </div>)
            }
        </div>
    )
}

export default Links