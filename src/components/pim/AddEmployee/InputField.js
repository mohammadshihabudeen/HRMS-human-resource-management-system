import React from 'react';

const InputField = ({ label, name, required, type, value, onChange }) => {
    return (
        <div className="mb-4 row">
            <label htmlFor={name} className="col-sm-2 col-form-label text-nowrap">
                {required ? (
                    <>
                        {label} <span className='text-danger'>*</span>
                    </>
                ) : (
                    label
                )}
            </label>
            <div className="col-sm-3">
                {
                    type === 'dropdown' ? (
                        <div className="dropdown">
                            <select
                                className="form-input-select"
                                aria-label="Default select example"
                                name={name}
                                value={value}
                                onChange={onChange}
                            >
                                <option value="Enabled">Enabled</option>
                                <option value="Disabled">Disabled</option>
                            </select>
                        </div>
                    ) : (
                        <input
                            type={type}
                            className={type != "checkbox" ? "form-input" : 'form-input-checkbox'} 
                            name={name}
                            id={name}
                            value={value}
                            onChange={onChange}
                            required={required}
                        />
                    )
                }
                {type == 'file' ? <p className='required'>Accepts jpg, png, gif up to 1MB Recommended dimensions: 200px X 200px</p> : ''}

            </div>
        </div>
    );
};

export default InputField;
