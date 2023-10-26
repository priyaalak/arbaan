import React from 'react'

function TotalComments() {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-item-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-chat-left-text fs-1 text-danger"></i>
                <div className='text-danger'>
                    <span>Total Comments</span>
                    <h2>50</h2>
                </div>
            </div>
        </div>
    )
}

export default TotalComments