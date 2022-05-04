import React, {useState} from "react";
import "./Form.css";

export default function Form() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        petName: "",
        email: "",
        phoneNumber: "",
        homeAddress: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }

    const handlePetNameInputChange = (event) => {
        setValues({...values, petName: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handlePhoneNumberInputChange = (event) => {
        setValues({...values, phoneNumber: event.target.value})
    }

    const handleHomeAddressInputChange = (event) => {
        setValues({...values, homeAddress: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email 
            && values.petName && values.phoneNumber && values.homeAddress) {
            setValid(true);
        }
        setSubmitted(true);
    }
    
  return (
    <div class="form-container">
        <h1>Adoption Form</h1>
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for adopting</div> : null }

        <input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Enter Your First Name"
          name="firstName"/>
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null }

        <input
        onChange={handleLastNameInputChange}
        value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Enter Your Last Name"
          name="lastName"/>
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null }

        <input
        onChange={handlePetNameInputChange}
        value={values.petName}
          id="pet-name"
          class="form-field"
          type="text"
          placeholder="Enter The Name of The Pet "
          name="petName"/>
        {submitted && !values.petName ? <span>Please enter a pet name</span> : null }

        <input
        onChange={handleEmailInputChange}
        value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Enter Your Email Address"
          name="email"/>
        {submitted && !values.email ? <span>Please enter an email address</span> : null }

        <input
        onChange={handlePhoneNumberInputChange}
        value={values.phoneNumber}
          id="phone-number"
          class="form-field"
          type="text"
          placeholder="Enter Your Phone Number "
          name="phoneNumber"/>
        {submitted && !values.phoneNumber ? <span>Please enter a phone number</span> : null }

        <input
        onChange={handleHomeAddressInputChange}
        value={values.homeAddress}
          id="home-address"
          class="form-field"
          type="text"
          placeholder="Enter Your Home Address "
          name="homeAddress"/>
        {submitted && !values.homeAddress ? <span>Please enter an address</span> : null }


        <button class="form-field" type="submit">
          Adopt Pet
        </button>
      </form>
    </div>
  );
}