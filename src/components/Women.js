import React from 'react'
import {Link, Outlet } from 'react-router-dom'



const Women = () => {
    return (
        <div><p>Women Items:</p>

            <ul>
                <li><Link to='/women/Grooming'>Grooming</Link></li>
                <li><Link to='/women/Shirt'>Shirt</Link></li>
                <li><Link to='/women/Trouser'>Trouser</Link></li>
                <li><Link to='/women/Jewellery'>Jewellery</Link></li>
            </ul>
            <Outlet />

        </div>
    )
}

export default Women