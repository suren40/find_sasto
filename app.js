const express = require('express');
const app = express();
const port = 3006;

app.get('/',(req,res) => {
	res.send("Welcome to Find_sasto_tech");
});

app.listen(port, () => console.log(`Listening at ${port}`));

