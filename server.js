// requring express
const express = require ("express");

// initialize my app
const app = express();

app.get("/detail", (req, res) => {
    res.send("My first Nodejs connection");
});

// initialize the PORT   
const PORT = process.env.PORT || 4000

// function to listen to the PORT
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
