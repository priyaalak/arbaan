import React from 'react'

function TotalPosts() {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-item-center bg-white border border-secondary shadow-sm">
                <i className="bi bi-file-earmark-post fs-1 text-success"></i>
                <div className='text-success'>
                    <span>Total Posts</span>
                    <h2>10</h2>
                </div>
            </div>
        </div>
  )
}

export default TotalPosts