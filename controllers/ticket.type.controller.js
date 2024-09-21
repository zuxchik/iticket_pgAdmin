const { TicketType } = require("../models")
const { validateTickeType } = require("../validations/ticket.type.validetion")

exports.createTicketType = async (req, res) => {
    const { error } = validateTickeType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const ticketType = await TicketType.create(req.body)
        res.status(201).send(ticketType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getTicketTypes = async (req, res) => {
    try {
        const ticketType = await TicketType.findAll()
        res.status(201).send(ticketType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geTicketTypesBiId = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id)
        if (!ticketType) return res.status(404).send("TicketTypes not faund")
        res.status(200).send(ticketType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataTicketTypes = async (req, res) => {
    const { error } = validateTickeType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const ticketType = await TicketType.findByPk(req.params.id)
        if (!ticketType) return res.status(404).send("Usver not fa unt")


        await ticketType.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletTicketTypes = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id)
        if (!ticketType) return res.status(404).send("ticketType not fa unt")


        await ticketType.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
