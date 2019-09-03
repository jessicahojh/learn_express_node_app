const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

// The above index.js script imports the express module which exports as default 
// a function that creates an Express application. This function is executed and 
// the returned Express application is stored in a variable named app. The script 
// defines a port variable that assumes the value of a defined environmental 
// variable, process.env.PORT, or 8000. Next, it creates a simple route that 
// handles GET HTTP requests made to the root path, /, and replies with a string. 
// Finally, the Express app is set up to listen for HTTP requests in the port 
// previously defined.