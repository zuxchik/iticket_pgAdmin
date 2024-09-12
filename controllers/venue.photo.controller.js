const { VenueType } = require("../models")
const { validateTicket } = require("../validetions/ticket.validetion")

exports.createTicket = async (req, res) => {
    const { error } = validateTicket(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const ticket = await Ticket.create(req.body)
        res.status(201).send(ticket)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findAll()
        res.status(201).send(ticket)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getTicketBiId = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id)
        if (!ticket) return res.status(404).send("ticket not faund")
        res.status(200).send(ticket)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataTicket = async (req, res) => {
    const { error } = validateTicket(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const ticket = await Ticket.findByPk(req.params.id)
        if (!ticket) return res.status(404).send("ticket not fa unt")


        await ticket.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id)
        if (!ticket) return res.status(404).send("ticket not fa unt")


        await ticket.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
