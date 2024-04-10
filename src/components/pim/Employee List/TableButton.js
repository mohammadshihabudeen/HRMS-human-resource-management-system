import React from 'react'

const TableButton = () => {
  return (
    <>
    <div class="btn-group me-3 mt-2">
    <button type="submit" class="btn " style={{ backgroundColor: "#999b30", width:'20%' }}>Add</button>
    </div>
    <div class="btn-group me-3 mt-2">
    <button type="submit" class="btn btn-secondary">Delete</button>
    </div>
    </>
  )
}

export default TableButton