require('dotenv').config()
const express = require("express"); 
const v1VoterRouter = require("./v1/routes/voterRoutes");

const app = express(); 
const PORT = process.env.PORT; 

app.use(express.json())
app.use("/api/v1/voters", v1VoterRouter);

app.listen(PORT, () => 
{ 
    console.log(`API is listening on port ${PORT}`); 
});