import React, { useState } from 'react';
import InputField from './InputField';

const AddEmployeeForm = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        empid: '',
        photo: '',
        uname: '',
        pword1: '',
        pword2: '',
        status: 'Enabled' // Default status
    });
    const [errorMessage, setErrorMessage] = useState('');

    // Event handler to update form data
    const handleInputChange = (e) => {
        const { name, value, } = e.target;
        if (name==="photo"){
            console.log(e.target.files);
            console.log(URL.createObjectURL(e.target.files[0]))
        }
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (formData.pword1 !== formData.pword2) {
            setErrorMessage('Passwords does not match.');
            return; // Prevent form submission
        }
        // Log form data to the console
        console.log(formData);
        // Clear error message if passwords match
        setErrorMessage('');
    };

    return (
        <div>
            <form className='p-3' onSubmit={handleSubmit}>
                {/* Input fields */}
                <div className="mb-2 row">
                    <div className="col-md-2">
                        <label htmlFor="firstName" className="col-form-label mt-4">Full Name</label>
                    </div>
                    <div className="col-md-2 col-sm-5">
                        {/* First Name */}
                        <label htmlFor="firstName" className="inputName"> <span className='text-danger'>*</span> First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="inputName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* Middle Name */}
                    <div className="col-md-2 col-sm-5">
                        <label htmlFor="middleName" className="inputName">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="middleName"
                            id="inputMiddleName"
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Last Name */}
                    <div className="col-md-2 col-sm-5">
                        <label htmlFor="lastName" className="inputName"> <span className='text-danger'>*</span> Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="inputLastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* Other InputFields */}
                <InputField label={"Employee Id"} name={"empid"} required={false} type={"text"} value={formData.empid} onChange={handleInputChange} />
                {/* Photograph */}
                <InputField label={"Photograph"} name={"photo"} required={false} type={"file"} value={formData.photo} onChange={handleInputChange} />
                {/* User Name */}
                <InputField label={"User Name"} name={"uname"} required={true} type={"text"} value={formData.uname} onChange={handleInputChange} />
                {/* Password */}
                <InputField label={"Password"} name={"pword1"} required={true} type={"password"} value={formData.pword1} onChange={handleInputChange} />
                {/* Confirm Password */}
                <InputField label={"Confirm Password"} name={"pword2"} required={true} type={"password"} value={formData.pword2} onChange={handleInputChange} />
                {/* Status */}
                <InputField label={"Status"} name={"status"} required={true} type={"dropdown"} value={formData.status} onChange={handleInputChange} />
                {/* Rest of the InputFields */}
                <p className='required'>*Required field</p>
                <hr />
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {/* Submit Button */}
                <div className="row">
                    <div className="col-md-2">
                        <button type="submit" className="submit-btn">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
