const { Venue, VenueType, Region, District } = require("../models")
const { validetionVanue } = require("../validations/venue.validetion")

exports.createVenue = async (req, res) => {
    const { error } = validetionVanue(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venue = await Venue.create(req.body)
        res.status(201).send(venue)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getVenues = async (req, res) => {
    try {
        const venue = await Venue.findAll()
        res.status(201).send(venue)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geVenuesBiId = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id, {
            include: [
                {
                    nodel: VenueType,
                    as: "venue_type"
                },
                {
                    nodel: Region,
                    as: "region"
                },
                {
                    nodel: District,
                    as: "district"
                }
            ]
        })
        if (!venue) return res.status(404).send("Venues not faund")
        res.status(200).send(venue)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataVenues = async (req, res) => {
    const { error } = validetionVanue(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venue = await Venue.findByPk(req.params.id)
        if (!venue) return res.status(404).send("Usver not fa unt")


        await venue.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletVenues = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id)
        if (!venue) return res.status(404).send("venue not fa unt")


        await venue.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
