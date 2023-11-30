const express = require("express");
const HTTP_SERVER = express();


const PORT =  5000;

HTTP_SERVER.use("/news",require("./controllers/news"));
HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});



