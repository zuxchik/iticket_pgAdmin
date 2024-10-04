const { VenueType } = require("../models")
const { validatevenueType } = require("../validations/venue.type.validetion")

exports.createVenueType = async (req, res) => {
    const { error } = validatevenueType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venueType = await VenueType.create(req.body)
        res.status(201).send(venueType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
exports.getVenueType = async (req, res) => {
    try {
        const venueType = await VenueType.findAll()
        res.status(201).send(venueType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getVenueTypeBiId = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id)
        if (!venueType) return res.status(404).send("venueType not faund")
        res.status(200).send(venueType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataVenueType = async (req, res) => {
    const { error } = validatevenueType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venueType = await VenueType.findByPk(req.params.id)
        if (!venueType) return res.status(404).send("venueType not fa unt")


        await venueType.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletVenueType = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id)
        if (!venueType) return res.status(404).send("venueType not fa unt")


        await venueType.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
