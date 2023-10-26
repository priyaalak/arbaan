import React from 'react'

function TotalTodos() {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-item-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-check2-square fs-1 text-warning"></i>
                <div className='text-warning'>
                    <span>Total Todos</span>
                    <h2>20</h2>
                </div>
            </div>
        </div>
    )
}

export default TotalTodos