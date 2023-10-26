import React from 'react'

function TodoDashboard() {
  return (
    <div>
        <div className="card rounded-3">
            <div className="card-body p-4">
                <p className="mb-2"><span className="h2 me-2">ToDos</span></p>
                <ul className="list-group rounded-0">
                    <li className="list-group-item border-0 d-flex align-items-center ps-0">
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." checked />
                        <s>Task list and assignments</s>
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center ps-0">
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Set due date and assignments
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center ps-0">
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Remove duplicate tasks and stories
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center ps-0">
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Update the userflow and stories
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center ps-0">
                        <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                        Adjust the components
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default TodoDashboard