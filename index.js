const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send({ hi: "Hello!" });
});

const PORT = processs.env.PORT || 5000;

app.listen(PORT);
