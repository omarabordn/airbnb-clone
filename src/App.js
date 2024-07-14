import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Data from "./data"


export default function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                item={item} // we can insted use {...item} to slice the props.
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card--list">
                {cards}
            </div>
        </div>
    )
}