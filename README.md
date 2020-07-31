Visual mockup <a href="https://www.figma.com/file/tsBvUnL3KB5rl5kiqgfCHJ/Untitled?node-id=0%3A1">Here</a>


# My Daily Bible Journal App 



### MVP
Description: A simple Bible App that allows you to keep track of your thoughts while you read a random verse for the day. <br/>
Features: 
- User can see a random bible verse 
- If user doesn't like verse it can be changed 
- User can also record what thy thought about the verse
- Users thoughts will be stored on the side of the page with the scripture and the date 
- Current date is displayed on the top of the page

### SERVER
Dependencies:
- express 

Endpoints: 
- app.get("/api/")
- app.post("/api/")
- app.delete("/api/")
- app.put("/api/")
- app.put("/api/")

Structure:
- server/
    - index.js
    - controller.js
    



### CLIENT
- axios 

Structure: 
- src/
    - App.js
    - App.css
    - reset.css
    - components/
        - Header.js 
        - Scripture.js 
        - display.js 
        - Form.js 
        - task-1.js 
        - task-2.js 




### ICEBOX
- add quotes api 
- Change from bible verses to quotes
- Search YouTube for verses or quotes like what is displayed