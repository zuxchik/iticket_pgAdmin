const { EventType } = require("../models")
const { validateEventType } = require("../validations/event.type.validetion")

exports.createEventType = async (req, res) => {
    const { error } = validateEventType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const eventType = await EventType.create(req.body)
        res.status(201).send(eventType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getEventTypes = async (req, res) => {
    try {
        const eventType = await EventType.findAll()
        res.status(201).send(eventType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geEventTypesBiId = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id)
        if (!eventType) return res.status(404).send("EventTypes not faund")
        res.status(200).send(eventType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataEventTypes = async (req, res) => {
    const { error } = validateEventType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const eventType = await EventType.findByPk(req.params.id)
        if (!eventType) return res.status(404).send("Usver not fa unt")


        await eventType.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletEventTypes = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id)
        if (!eventType) return res.status(404).send("eventType not fa unt")


        await eventType.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
