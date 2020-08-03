import React, {Component} from "react"


class Form extends Component{
    constructor(){
        super();
        this.state = {
            texts: ""
        }
    }
    
    
    
    universalHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    
    render(){
        return(
            
            <div className="thoughts-form">
                <form onSubmit={e => this.props.addText(this.state.verse)}>
                    <input 
                    name= "verse" 
                    value={this.state.title} 
                    type="text" 
                    onChange={(e) => this.universalHandler(e)}   
                    placeholder="Sharing from the bible?"></input>
                    <button>Add Verse</button>
                </form>
            </div>
        )
    }
}


export default Form