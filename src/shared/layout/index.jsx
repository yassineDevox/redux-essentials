import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div style={{ border: '1px solid' }}>
            <ul style={{ display: "flex", gap: '10px', listStyleType: 'none' }}>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>
                <li>
                    <Link to={'/todos'}>Todos</Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout