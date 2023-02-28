import React, { useState } from "react"

function Front({ hog }) {
    return (
        <div>
            <h1>{hog.name}</h1>
            <img src={hog.image} alt={hog.name}/>
        </div>
    )
}

function Back({hog}) {
    return (
        <div>
            <h2>Name: {hog.name}</h2>
            <h3>Specialty: {hog.specialty}</h3>
            <h3>Weight: {hog.weight} kilos</h3>
            <h3>{hog["highest medal achieved"]} medal achieved</h3>
            <h3>{hog.greased ? "Greased" : "Not greased"}</h3>
        </div>
    )
}

function HogsCard({ hog }) {

    const [ front, setFront ] = useState(false)

    const toggleHogCard = () => {
        setFront(front => !front)
    }

    return(
        <div className="ui four wide column image pigTile" onClick={toggleHogCard}>
            {front ? <Front hog={hog}/> : <Back hog={hog}/>}
        </div>
    )
}

export default HogsCard;