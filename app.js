const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => [
	res.send(`
		<h1>Hello Rohit...</h1>
		<p>this is testing live website</p>
	`)
])

app.listen(port, (req, res) => {
	console.log(`App Listening on : ${port}`)
})