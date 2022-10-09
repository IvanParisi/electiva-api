require('dotenv').config()
const express = require("express"); 
const morgan = require("morgan")
const fs = require('fs');
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const v1VoterRouter = require("./v1/routes/voterRoutes");
const v1CampaingRouter = require("./v1/routes/campaingRoutes");

const app = express(); 
const PORT = process.env.PORT; 

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
  });

// Middlewares
app.use(morgan('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}))
app.use(morgan('dev'))
app.use(helmet());
app.use(cors())
app.use(limiter);
app.use(express.json())

// End-Points
app.use("/api/v1/voters", v1VoterRouter);
app.use("/api/v1/campaing", v1CampaingRouter);

app.listen(PORT, () => 
{ 
    console.log(`API is listening on port ${PORT}`); 
});