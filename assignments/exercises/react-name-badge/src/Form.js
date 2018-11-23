import React from 'react'

const Form = ({firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, handleChange, handleSubmit}) => {
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <div className="input-div">
            <input 
                type="text" 
                name="firstName"
                value={firstName} 
                onChange={handleChange} 
                placeholder="First Name"/>
            <input 
                type="text" 
                name="lastName"
                value={lastName}  
                onChange={handleChange} 
                placeholder="Last Name"/>
        </div>
        <div className="input-div">
            <input 
                type="text" 
                name="email"  
                value={email}
                onChange={handleChange} 
                placeholder="e-mail"/>
            <input 
                type="text" 
                name="placeOfBirth" 
                value={placeOfBirth} 
                onChange={handleChange} 
                placeholder="Place of Birth"/>
        </div>
        <div className="input-div">
            <input 
                type="number" 
                name="phone"  
                value={phone}
                onChange={handleChange} 
                placeholder="Phone Number"/>
            <input 
                type="text" 
                name="favoriteFood"  
                value={favoriteFood}
                onChange={handleChange} 
                placeholder="Favorite Food"/>
        </div>
        <div className="textarea-div">
            <textarea 
                name= "about"
                value={about} 
                onChange={handleChange} />
        </div>
        <div className="button-div">
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
