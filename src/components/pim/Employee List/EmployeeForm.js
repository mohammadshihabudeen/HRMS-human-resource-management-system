import React, { useState } from "react";

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        employeename: "",
        id: "",
        supervisorname: "",
        employeestatus: "",
        include: "",
        jobtitle: "",
        subunit: "",
        location: ""


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
            employeename: "",
            id: "",
            supervisorname: "",
            employeestatus: "",
            include: "",
            jobtitle: "",
            subunit: "",
            location: ""
        });
    };

    return (
        <>
            <div className='container-fluid '>
                <form action="" onSubmit={handleSubmit}>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <label className="label">Employee Name</label>
                            <input type="text"
                                className="form-input mt-3"
                                name="employeename"
                                value={employee.employeename}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Id</label>
                            <input type="text"
                                className="form-input mt-3"
                                name="id"
                                value={employee.id}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Employee Status</label>
                            <select className="form-input-select mt-3" aria-label="Default select example"
                                name="employeestatus"
                                value={employee.employeestatus}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div className="col-md-3  ">
                            <label className="form-label">Include</label>
                            <select className="form-input-select mt-3" aria-label="Default select example"
                                name="include"
                                value={employee.include}
                                onChange={handleChange} >
                                <option selected>Current Employee Only</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-4 mt-2">
                        <div className="col-md-3">
                            <label className="form-label">Supervisor Name</label>
                            <input type="text"
                                className="form-input mt-3"
                                name="supervisorname"
                                value={employee.supervisorname}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Job Title</label>
                            <select className="form-input-select mt-3" aria-label="Default select example"
                                name="jobtitle"
                                value={employee.jobtitle}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Sub Unit</label>
                            <select className="form-input-select mt-3" aria-label="Default select example"
                                name="subunit"
                                value={employee.subunit}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div className="col-md-3  ">
                            <label htmlFor="inputAddress2" class="form-label">Location</label>
                            <select className="form-input-select mt-3" aria-label="Default select example"
                                name="location"
                                value={employee.location}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className=" employee-body">
                        {/* <hr className="mt-4"/> */}
                    </div>
                    <div className="button-group">
                        <div className="py-2">
                            <button type="search" className="primary-btn" >Search</button>
                        </div>
                        <div className="py-2">
                            <button type="reset" className="cancel-btn" onClick={resetForm}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;