const express = require("express")
const mongoose = require("mongoose")
const treatmentSchema = require("../schemas/treatmentSchema")
const router = express.Router()

const Treatment = new mongoose.model("Treatment", treatmentSchema)

router.post("/", async (req, res) => {
	const newTreatment = new Treatment(req.body)
	await newTreatment.save((err) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send({ message: "data added successfully" })
		}
	})
})

router.post("/all", async (req, res) => {
	await Treatment.insertMany(req.body, (err) => {
		if (err) {
			res.status(500).send({
				message: "there was an server side error",
				error: { ...err },
			})
		} else {
			res.status(200).send({ message: "products added successfully" })
		}
	})
})

module.exports = router
