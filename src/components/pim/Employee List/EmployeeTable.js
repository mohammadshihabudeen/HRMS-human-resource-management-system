import React, { useState } from 'react';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([
        { id: 1000, firstName: "John", lastName: "Doe", jobTitle: "Software Engineer", employeeStatus: "Active", subunit: "Engineering", supervisor: "Jane Doe" },
        { id: 1001, firstName: "Jane", lastName: "Doe", jobTitle: "Product Manager", employeeStatus: "Active", subunit: "Product", supervisor: "John Doe" },
        { id: 1002, firstName: "Jane", lastName: "Doe", jobTitle: "Product Manager", employeeStatus: "Active", subunit: "Product", supervisor: "John Doe" }

    ]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        employees.forEach((employee) => {
            employee.selected = !selectAll;
        });
        setEmployees([...employees]);
    };

    const handleSelectChange = (id) => {
        const newEmployees = employees.map((employee) => {
            if (employee.id === id) {
                return { ...employee, selected: !employee.selected };
            }
            return employee;
        });
        setEmployees(newEmployees);
    };

    return (
        <div>
            <div className="button-group">
                <div className="py-2">
                    <button type="search" className="primary-btn" >Add</button>
                </div>
                <div className="py-2">
                    <button type="reset" className="cancel-btn" >delete</button>
                </div>
            </div>
            <hr />
            <table className="table table-striped wrap z-n1">
                <thead className="table-primary ">
                    <tr>
                        <th scope="col">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAllChange}
                                    id="selectAll"
                                />
                            </div>
                        </th>
                        <th scope="col">Id</th>
                        <th scope="col">First (& Middle) Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Employee Status</th>
                        <th scope="col">Subunit</th>
                        <th scope="col">Supervisor</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={employee.selected}
                                        onChange={() => handleSelectChange(employee.id)}
                                        id={employee.id}
                                    />
                                </div>
                            </td>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.jobTitle}</td>
                            <td>{employee.employeeStatus}</td>
                            <td>{employee.subunit}</td>
                            <td>{employee.supervisor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;