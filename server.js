// import and setup required npm packages
const express = require ('express');
const path = require('path');

// set up express server
const app = express();

// serve static files
app.use(express.static('app'));

// set up PORT for localhost
const PORT = 8080 || process.env.PORT;

// simple routing
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/app/index.html'));
});

// run server
app.listen(PORT, function() {
	console.log(`mtgAngular listening on localhost:${PORT}.`);
});
