import {useState} from 'react'
import { Outlet, Link } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';
// props
type IProps = {
};

const Sidebar: React.FC<IProps> = () => {
    const [active, setActive] = useState<number>(1)
    return (
        <div className="Arbaan-OuterLayout sidebar d-flex justify-content-between flex-column text-white py-3 ps-3 pe-5 vh-100">
            <div>
                <Link to="/arbaan" className="p-3 text-decoration-none text-white">
                    <i className="bi bi-buildings fs-4 me-4"></i>
                    <span className="fs-5">Arbaan</span>
                </Link>
                <hr className="text-white mt-2" />
                <ul className="nav nav-pills flex-column mt-3">
                    <li className={active === 1 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"}
                        onClick={e => setActive(1)}>
                        <Link to="/Dashboard" className="p-1 text-decoration-none text-white">
                            <i className="bi bi-speedometer2 me-3 fs-5"></i>
                            <span className="fs-5">Dashboard </span>
                        </Link>
                    </li>
                    <li className={active === 2 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"}
                        onClick={e => setActive(2)}>
                        <Link to="/Posts" className="p-1 text-decoration-none text-white">
                            <i className="bi bi-postcard me-3 fs-5"></i>
                            <span className="fs-5">Posts</span>
                        </Link >
                    </li>
                </ul>
            </div>
            <div>
                <hr className="text-white" />
                <div className="nav-item p-2">
                    <Link to="/arbaan" className="p-1 text-decoration-none text-white">
                        <i className="bi bi-power me-3 fs-5"></i>
                        <span className="fs-5"><strong>Logout</strong></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar