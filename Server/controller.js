const text  = require("./text.json")
let id = 26; 



module.exports = {
    getText: (req, res) =>{
        res.status(200).send(text)
    }, 
    addVerse: (req, res) => {
        let {texts} = req.body 
        if(!texts) {
            res.status(405).send("Expected to recieve texts, reference, and version from user")
        } else {
            const newTodo = {
                id, 
                texts,
                

                
            }
        text.push(newTodo)
        id++
        res.status(200).send(text)

            
        }

    }, 
    getDelete: (req, res) => {
        const {id} = req.params
        const index = text.findIndex(text => text.id === +id)
        if(index === -1){
            res.status(404).send("Text not found on text.json")
        }else {
            text.splice(index, 1)
            res.status(200).send(text)
        }
    }, 
    getRead: (req, res) => {
      const {id} = req.params
       const index = text.findIndex(text => text.id === +id)
    if(index === -1){
          res.status(404).send("Unable to update")
        } else{
            text[index].read = !text[index].read
            res.status(200).send(text)
        }
    }
}