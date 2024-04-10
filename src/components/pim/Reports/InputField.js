import React, { useState } from 'react';

const InputField = ({ label, name, required, type, value, onChange, addField, newRequired }) => {
    const [newValue, setNewValue] = useState(value);
    const [showInputField, setShowInputField] = useState(false);
    const [newOption, setNewOption] = useState('');

    const handleAddOption = () => {
        if (newOption.trim() !== '') {
            const updatedValue = [...newValue, newOption];
            setNewValue(updatedValue);
            addField({ target: { name, value: updatedValue } }); // Pass updated value to addField
            setNewOption(''); // Reset the input field after adding the option
            setShowInputField(false); // Hide the input field after adding the option
        }
    };

    const handleInputChange = (e) => {
        if (type === "text") {
            onChange(e);
        } else {
            const selectedValue = e.target.value;
            setNewValue([selectedValue]); // Update the selected value in state
            onChange({ target: { name, value: selectedValue } }); // Pass selected value to parent component
        }
    };

    const handleInputTextChange = (e) => {
        setNewOption(e.target.value);
    };

    return (
        <div className="row">
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
                {type === 'dropdown' ? (
                    <div className="dropdown">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name={name}
                            value={newValue[0]} // Use newValue for the value of the select
                            onChange={handleInputChange} // Use handleInputChange for onChange
                        >
                            {newValue.map((value) => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <input
                        type={type}
                        className="form-control"
                        name={name}
                        id={name}
                        onChange={handleInputChange}
                        required={required}
                    />
                )}
            </div>
            <div className="col-sm-2">
                {showInputField && (
                    <input
                        type="text"
                        className="form-control placetext"
                        value={newOption}
                        placeholder='Enter new option'
                        onChange={handleInputTextChange} // Use handleInputTextChange for input onChange
                    />
                )}
                {newRequired && (
                    <a
                        type="button"
                        className="text-dark"
                        onClick={() => {
                            setShowInputField(!showInputField); // Toggle visibility of input field
                            if (showInputField) {
                                handleAddOption(); // If the input field was visible, add the option
                            }
                        }}
                    >
                        {showInputField ? 'Save' : 'Add'}
                    </a>
                )}
            </div>
            <hr className='mt-2' />
        </div>
    );
};

export default InputField;