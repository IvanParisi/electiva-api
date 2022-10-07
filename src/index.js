require('dotenv').config()
const express = require("express"); 
const v1VoterRouter = require("./v1/routes/voterRoutes");
const v1CampaingRouter = require("./v1/routes/campaingRoutes");

const app = express(); 
const PORT = process.env.PORT; 

app.use(express.json())
app.use("/api/v1/voters", v1VoterRouter);
app.use("/api/v1/campaing", v1CampaingRouter);

app.listen(PORT, () => 
{ 
    console.log(`API is listening on port ${PORT}`); 
});