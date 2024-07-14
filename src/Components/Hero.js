import React from "react"
import Grid from "../images/Group 77.png"

export default function Hero() {
    return (
            <div className="hero-container">
                <img className="grid" src={Grid} />
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
    )
}