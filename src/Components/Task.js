import React from "react"

const Task = (props) => {
    
    
    return(
        <div className="tasks">
            <h1 className= "text-verse" data-aos="fade"> {props.text.read} {props.text.reference} {props.text.texts}</h1>
            <button 
            className="verse-button" 
            onClick={()=> props.deleteText
            (props.text.id)}>Delete</button>
            <button className="verse-button" onClick={() =>props.getRead(props.text.id)}>Finished Reading?</button>
        </div>
    )
}

export default Task