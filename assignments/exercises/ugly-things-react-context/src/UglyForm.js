import React from 'react'
import { withUglyThings } from './UglyThingsProvider'

const UglyForm = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={props.uglyTitle} 
                onChange={props.handleChange} 
                placeholder="Title" />
            <input 
                type="text" 
                name="description" 
                value={props.uglyDescription} 
                onChange={props.handleChange} 
                placeholder="Description" />
            <input 
                type="text" 
                name="imgUrl" 
                value={props.uglyImgUrl} 
                onChange={props.handleChange} 
                placeholder="Image" />
            <button>Submit Ugly Thing</button>
        </form>
    </div>
  )
}

export default withUglyThings(UglyForm)
