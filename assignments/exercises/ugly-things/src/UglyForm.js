import React from 'react'
import { withUglyThings } from './UglyThingsProvider'

const UglyForm = (props) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={props.Uglytitle} 
                onChange={props.handleChange} 
                placeholder="Title" />
            <input 
                type="text" 
                name="description" 
                value={props.description} 
                onChange={props.handleChange} 
                placeholder="Description" />
            <input 
                type="text" 
                name="imgUrl" 
                value={props.imgUrl} 
                onChange={props.handleChange} 
                placeholder="Image" />
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default withUglyThings(UglyForm)
