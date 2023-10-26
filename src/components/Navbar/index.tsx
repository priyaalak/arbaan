import React from 'react'

function Navbar(props:any) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark Arbaan-OuterLayout">
            <div className="container-fluid">
                <a className="navbar-brand d-block d-md-block" onClick={props.Toggle}>
                    <i className='bi bi-justify'></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2 ">
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <i className="bi bi-person-bounding-box" /> User
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar