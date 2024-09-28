const { Seat, Venue, SeatType, Sector } = require("../models")
const { validateSeat } = require("../validations/seat.validetion")

exports.createSeat = async (req, res) => {
    const { error } = validateSeat(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const seat = await Seat.create(req.body)
        res.status(201).send(seat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getSeats = async (req, res) => {
    try {
        const seat = await Seat.findAll()
        res.status(201).send(seat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geSeatsBiId = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id,{
            include:  [
                {
                    model: Venue,
                    as: "venue"
                },
                {
                    model: SeatType,
                    as: "seattype"
                },
                {
                    model: Sector,
                    as: "sector"
                }
            ]
        })
        if (!seat) return res.status(404).send("Seats not faund")
        res.status(200).send(seat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataSeats = async (req, res) => {
    const { error } = validateSeat(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const seat = await Seat.findByPk(req.params.id)
        if (!seat) return res.status(404).send("Usver not fa unt")


        await seat.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletSeats = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id)
        if (!seat) return res.status(404).send("seat not fa unt")


        await seat.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
