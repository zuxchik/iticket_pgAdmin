const { Event, Region, District, VenueType } = require("../models")
const { validateEvent } = require("../validations/event.validetion")


exports.createEvent = async (req, res) => {
    const { error } = validateEvent(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const event = await Event.create(req.body)
        res.status(201).send(event)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getEvents = async (req, res) => {
    try {
        const event = await Event.findAll()
        res.status(201).send(event)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geEventsBiId = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id,{
            include:  [
                {
                    nodel: Region,
                    as: "region"
                },
                {
                    nodel: District,
                    as: "district"
                },
                {
                    nodel: VenueType,
                    as: "VenueType"
                }
            ]
        })
        if (!event) return res.status(404).send("Events not faund")
        res.status(200).send(event)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataEvents = async (req, res) => {
    const { error } = validateEvent(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const event = await Event.findByPk(req.params.id)
        if (!event) return res.status(404).send("Usver not fa unt")


        await event.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletEvents = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id)
        if (!event) return res.status(404).send("event not fa unt")


        await event.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
