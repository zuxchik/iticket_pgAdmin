const { SeatType } = require("../models")
const { validateSeatType } = require("../validations/seat.type.validetion")

exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const seatType = await SeatType.create(req.body)
        res.status(201).send(seatType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getSeatTypes = async (req, res) => {
    try {
        const seatType = await SeatType.findAll()
        res.status(201).send(seatType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geSeatTypesBiId = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id)
        if (!seatType) return res.status(404).send("SeatTypes not faund")
        res.status(200).send(seatType)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataSeatTypes = async (req, res) => {
    const { error } = validateSeatType(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const seatType = await SeatType.findByPk(req.params.id)
        if (!seatType) return res.status(404).send("Usver not fa unt")


        await seatType.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletSeatTypes = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id)
        if (!seatType) return res.status(404).send("seatType not fa unt")


        await seatType.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
