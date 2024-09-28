const { Booking, Cart, Status} = require("../models")
const { validateBooking } = require("../validations/booking.validetion")

exports.createBooking = async (req, res) => {
    const { error } = validateBooking(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const booking = await Booking.create(req.body)
        res.status(201).send(booking)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.findAll()
        res.status(201).send(booking)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getBookingBiId = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id,{
            include:  [
                {
                    model: Cart,
                    as: "cart"
                },
                {
                    model: Status,
                    as: "status"
                }
            ]
        })
        if (!booking) return res.status(404).send("booking not faund")
        res.status(200).send(booking)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataBooking = async (req, res) => {
    const { error } = validateBooking(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const booking = await Booking.findByPk(req.params.id)
        if (!booking) return res.status(404).send("booking not fa unt")


        await booking.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id)
        if (!booking) return res.status(404).send("booking not fa unt")


        await booking.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
