const express = require("express"); 
const ctrl = require("./controller")
const app = express(); 
const port = 5500;
app.use(express.json());


app.get("/api/text", ctrl.getText)
app.post("/api/text", ctrl.addVerse) 
app.delete(`/api/text/:id`, ctrl.getDelete)
app.put("/api/text/read/:id", ctrl.getRead)



app.listen(port, () => {
    console.log("Server runnning on port " + port)

})