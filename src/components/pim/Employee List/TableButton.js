import React from 'react'

const TableButton = () => {
  return (
    <>
    <div className="btn-group me-3 mt-2">
    <button type="submit" className="primary-btn ">Add</button>
    </div>
    <div className="btn-group me-3 mt-2">
    <button type="submit" className="btn btn-secondary">Delete</button>
    </div>
    </>
  )
}

export default TableButton