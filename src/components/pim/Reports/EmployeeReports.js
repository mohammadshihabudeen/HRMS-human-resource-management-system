import React, { useState } from 'react';
import FormButton from '../Employee List/FormButton';

const EmployeeReports = () => {
    const [employee, setEmployee] = useState({
        reportname: "",

    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(employee);
    };

    const resetForm = () => {
        setEmployee({
            reportname: "",
        });
    };

    return (
        <>
            <div className='container-fluid '>
                <form action="" onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className="col-md-2">
                            <label className="form-label">Report Name</label>
                        </div>
                        <div className="col-md-3 ">
                            <input type="text"
                                className="form-control"
                                name="reportname"
                                value={employee.reportname}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                    <hr className="mt-4"/>
                    </div>
                    <div className='row'>
                    <FormButton/>
                    <div className="col-md-1 py-2">
                        <button type="reset" className="cancel-btn" onClick={resetForm}>Reset</button>
                    </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EmployeeReports