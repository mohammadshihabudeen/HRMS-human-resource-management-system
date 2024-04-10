import React, { useState } from "react";
import FormButton from "./FormButton";

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
                    <div class="row g-4">
                        <div class="col-md-3">
                            <label class="form-label">Employee Name</label>
                            <input type="text"
                                className="form-control"
                                name="employeename"
                                value={employee.employeename}
                                onChange={handleChange} />
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Id</label>
                            <input type="text"
                                className="form-control"
                                name="id"
                                value={employee.id}
                                onChange={handleChange} />
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Employee Status</label>
                            <select class="form-select" aria-label="Default select example"
                                name="employeestatus"
                                value={employee.employeestatus}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div class="col-md-3  ">
                            <label class="form-label">Include</label>
                            <select class="form-select" aria-label="Default select example"
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
                    <div class="row g-4 mt-2">
                        <div class="col-md-3">
                            <label class="form-label">Supervisor Name</label>
                            <input type="text"
                                className="form-control"
                                name="supervisorname"
                                value={employee.supervisorname}
                                onChange={handleChange} />
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Job Title</label>
                            <select class="form-select" aria-label="Default select example"
                                name="jobtitle"
                                value={employee.jobtitle}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Sub Unit</label>
                            <select class="form-select" aria-label="Default select example"
                                name="subunit"
                                value={employee.subunit}
                                onChange={handleChange} >
                                <option selected>All</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </select>
                        </div>
                        <div class="col-md-3  ">
                            <label for="inputAddress2" class="form-label">Location</label>
                            <select class="form-select" aria-label="Default select example"
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
                    <div>
                    <hr class="mt-4"/>
                    </div>
                    <FormButton/>
                    <div class="btn-group  mt-2">
                        <button type="reset" class="btn btn-secondary" onClick={resetForm}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;