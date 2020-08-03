import React from "react"
import Task from "./Task"

const Display = (props) => {
   const textMap = props.text.map(text =>{
        return <Task  key={text.id} getRead={props.getRead} deleteText={props.deleteText} text={text}  />
    })
    return(
        <div className="display-container">
            {textMap}
        </div>
    )
}

export default Display 