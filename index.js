const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const handleTreatments = require("./routes/handleTreatment")
require("dotenv").config()
const app = express()

// connect with mongodb by mongoose

mongoose
	.connect(
		`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.fnda1.mongodb.net/doctorsPortal?retryWrites=true&w=majority`
	)
	.then(() => console.log("connect"))
	.catch((err) => console.log(error))
// middleware
app.use(cors())
app.use(express.json())
app.use("/treatment", handleTreatments)

app.listen(process.env.PORT || 5000, () =>
	console.log("server listening on port 5000")
)
