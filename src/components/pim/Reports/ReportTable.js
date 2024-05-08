import React, { useState } from 'react';

const ReportTable = () => {
    const [employees, setEmployees] = useState([
        { id: 1, reportName: "Sample Report", },
    ]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        const updatedEmployees = employees.map(employee => ({ ...employee, selected: !selectAll }));
        setEmployees(updatedEmployees);
    };

    const handleSelectChange = (id) => {
        const updatedEmployees = employees.map(employee =>
            employee.id === id ? { ...employee, selected: !employee.selected } : employee
        );
        setEmployees(updatedEmployees);
    };

    const handleRun = () => {
        console.log("Run");
    };

    const handleEdit = (reportName) => {
        console.log("Edited:", reportName);
    };

    return (
        <div >
            <div className="button-group">
                <div className="py-2">
                    <a className='primary-btn-link ' href="/Pim/Reports/ReportForm" >Add</a>
                </div>
                <div className="py-2">
                    <button type="reset" className="cancel-btn" >delete</button>
                </div>
            </div>
            <hr />
            <table className="table table-striped wrap z-n1 m-2">
                <thead className="table-primary ">
                    <tr>
                        <th scope="col" className='col-1'>
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
                        <th scope="col" className='col-7'>Report Name</th>
                        <th scope="col" className='col-2'></th>
                        <th scope="col" className='col-2'></th>
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
                            <td>{employee.reportName}</td>
                            <td>
                                <a href="#" style={{ color: 'black' }} onClick={handleRun}>
                                    Run
                                </a>
                            </td>
                            <td>
                                <a href="#" style={{ color: 'black' }} onClick={() => handleEdit(employee.reportName)}>
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;
