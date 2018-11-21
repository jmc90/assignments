import React from 'react'

const Form = ({firstName, lastName, email, placeOfBirth, phone, favoriteFood, about, handleChange}) => {
  return (
    <div>
      <form onSubmit={}>
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
        <textarea 
            name= "about"
            value={about} 
            onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
