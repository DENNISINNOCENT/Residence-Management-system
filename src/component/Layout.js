import React from 'react'
import { Outlet, Link} from "react-router-dom"

function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to = "/rentals">Rental</Link>
            </li>
            <li>
                <Link to = "/description">Description</Link>
            </li>
            <li>
                <Link to ="/form">Form</Link>
            </li>

        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout