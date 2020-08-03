import React, {Component, useEffect}from 'react';
import "./reset.css"
import './App.css';
import Header from "./Components/Header"
import axios from 'axios';
import Display from "./Components/Display"
import Form from "./Components/Form"
import AOS from "aos"
import "aos/dist/aos.css";



class App extends Component {
  constructor(){
    super()
    this.state= {
      text: [],
      

      
    }
    this.getText = this.getText.bind(this)
    this.addText = this.addText.bind(this)
    this.deleteText= this.deleteText.bind(this)
    this.getRead = this.getRead.bind(this)
  }

  
componentDidMount(){
  this.getText();
  AOS.init({
    duration : 2000
  })
  AOS.refresh()
  
    
}

getText = () => {
  axios.get("/api/text").then((res) =>{
    this.setState({text: res.data})
  }).catch(err => console.log(err))
}
  
addText = (texts) => {
  axios.post("/api/text", {texts})
  .then(res => {
    this.setState({
      text: res.data
    })
  })
  .catch(err=> console.log(err))
}

deleteText = (id) => {
  axios.delete(`/api/text/${id}`).then(res => {
    this.setState({
      text: res.data
    })
  }).catch(err => console.log(err))
}

getRead = (id) => {
  axios.put(`/api/text/read/${id}`).then(res => {
    this.setState({text: res.data})
  }).catch(err => console.log(err))
}




render(){
    console.log(this.state)
    return(
      <div>

        <Header/>
        {/* <Form/> */}
        <Form addText={this.addText}/>
        <Display deleteText={this.deleteText} text = {this.state.text} getRead={this.getRead} data-aos='flip-right' />

        
        

      </div>
    )
  }
}
  

export default App;
