import React from 'react'
import 'bootstrap/dist/bootstrap/min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SlideBar.css'

function SlideBar(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto min-vh-100 bg-dark">
                    <ul>
                        <li>
                            <a className='nav-link px-2'><i className="bi-house"><span>Home</span></i></a>
                        </li>
                        <li>
                            <a className='nav-link px-2'><i className="bi-cart"><span>Store</span></i></a>
                        </li>
                        <li>
                            <a className='nav-link px-2'><i className="bi-table"><span>Events</span></i></a>
                        </li>
                        <li>
                            <a className='nav-link px-2'><i className="bi-heart"><span>User</span></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SlideBar