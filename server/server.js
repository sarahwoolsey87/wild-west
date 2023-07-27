const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8081
const app = express();
app.use(cors());

const survive = require("./library/survive");
const maths = require("./library/maths");

app.get("/", function(request, response){
 response.json("You are looking at my root route. How roude!")
})

app.get("/survive", survive);

// localhost:8080/maths?num1=6&num2=392
// request.query is {"num1":"6","num2":"392"}
app.get("/maths", maths );

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));