const express = require("express");
const HTTP_SERVER = express();
const cors = require('cors');

HTTP_SERVER.use(cors());

const PORT =  5000;
HTTP_SERVER.use(express.json());


HTTP_SERVER.use("/tool",require("./controllers/path"));
HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});




