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
                placeholder="First Name"
                required
                minLength="3" />
            <input 
                type="text" 
                name="lastName"
                value={lastName}  
                onChange={handleChange} 
                placeholder="Last Name"
                required
                minLength="3" />
        </div>
        <div className="input-div">
            <input 
                type="text" 
                name="email"  
                value={email}
                onChange={handleChange} 
                placeholder="e-mail"
                required
                minLength="3" />
            <input 
                type="text" 
                name="placeOfBirth" 
                value={placeOfBirth} 
                onChange={handleChange} 
                placeholder="Place of Birth"
                required
                minLength="3" />
        </div>
        <div className="input-div">
            <input 
                type="number" 
                name="phone"  
                value={phone}
                onChange={handleChange} 
                placeholder="Phone Number"
                required
                minLength="3" />
            <input 
                type="text" 
                name="favoriteFood"  
                value={favoriteFood}
                onChange={handleChange} 
                placeholder="Favorite Food"
                required
                minLength="3" />
        </div>
        <div className="textarea-div">
            <textarea 
                name= "about"
                value={about} 
                onChange={handleChange}
                required />
        </div>
        <div className="button-div">
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
