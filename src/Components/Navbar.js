import React from "react"
import Logo from "../images/airbnb 1.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={Logo} />
        </nav>
    )
}