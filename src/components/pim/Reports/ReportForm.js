import React, { useState } from 'react';
import InputField from './InputField';
import './Reports.css'
import Header from './Header';
const ReportForm = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        reportName: '',
        selectionCriteria:["Employee Name","Employee Address"],
        selectionCriteriaInclude:["Current Employees Only","All Employees"],
        displayFieldGroups: ["public","private"],
        DisplayFields:["Employee Id","Emplo"]
    });
    const [selectedFields,setSelectedFields] = useState({
        reportName: formData.reportName,
        selectionCriteria: formData.selectionCriteria[0], // Assuming only one can be selected
        selectionCriteriaInclude: formData.selectionCriteriaInclude[0], // Assuming only one can be selected
        displayFieldGroups: formData.displayFieldGroups[0], // Assuming only one can be selected
        DisplayFields: formData.DisplayFields[0], // Join selected fields with a comma
    });
    const [errorMessage, setErrorMessage] = useState('');

    // Event handler to update form data
    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSelectChange=e =>{
        const { name, value} = e.target;
        setSelectedFields({
            ...selectedFields,
            [name]: value
        });
    }
    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to the console
        console.log(selectedFields);
        // Clear error message if passwords match
        setErrorMessage('');
    };

    return (
        <div className='reports mt-3 m-4 '>
            <Header headerValue={"Define Report"}/>
            <form className='p-3' onSubmit={handleSubmit}>
                <InputField label={"Report Name"} name={"reportName"} required={true} type={"text"} value={formData.reportName} addField={handleInputChange} onChange={handleSelectChange} />
                <InputField label={"Selection Criteria"} name={"selectionCriteria"} required={false} type={"dropdown"} value={formData.selectionCriteria} addField={handleInputChange} onChange={handleSelectChange}  newRequired={true}/>
                <InputField label={"Selection Criteria Include"} name={"selectionCriteriaInclude"} required={true} type={"dropdown"} value={formData.selectionCriteriaInclude} addField={handleInputChange} onChange={handleSelectChange}  newRequired={false}/>
                <InputField label={"Display Field Group"} name={"displayFieldGroups"} required={false} type={"dropdown"} value={formData.displayFieldGroups} addField={handleInputChange} onChange={handleSelectChange}  newRequired={true}/>
                <InputField label={"Display Fields"} name={"DisplayFields"} required={false} type={"dropdown"} value={formData.DisplayFields} addField={handleInputChange} onChange={handleSelectChange}  newRequired={true}/>
                <label  className="col-sm-2 pt-0 col-form-label text-nowrap">
                Display Fields
            </label>
                <p className='required'>*Required field</p>
                <hr />
                {errorMessage && <div className="alert alert-danger">{errorMessage} onChange={handleSelectChange}</div>}
                {/* Submit Button */}
                <div className="row">
                    <div className="col-md-1 ">
                        <button type="submit" className="submit-btn">
                            Save
                        </button>
                    </div>
                    <div className="col-md-1 p-0">
                        <button type="submit" className="cancel-btn">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
            <div className='container mt-3'>
            </div>
        </div>
    );
};

export default ReportForm;
