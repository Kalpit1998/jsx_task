import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/withoutjsx"}>WithoutJSX</Link></li>
                <li><Link to={"/withjsx"}>WithJSX</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar