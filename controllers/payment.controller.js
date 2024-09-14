const { Paymant } = require("../models")
const { validatePayment } = require("../validetions/payment.validetion")

exports.createPayment = async (req, res) => {
    const { error } = validatePayment(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const payment = await Paymant.create(req.body)
        res.status(201).send(payment)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getPayment = async (req, res) => {
    try {
        const payment = await Paymant.findAll()
        res.status(201).send(payment)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getPaymentBiId = async (req, res) => {
    try {
        const payment = await Paymant.findByPk(req.params.id)
        if (!payment) return res.status(404).send("payment not faund")
        res.status(200).send(payment)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataPayment = async (req, res) => {
    const { error } = validatePayment(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const payment = await Paymant.findByPk(req.params.id)
        if (!payment) return res.status(404).send("payment not fa unt")


        await payment.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletPayment = async (req, res) => {
    try {
        const payment = await Paymant.findByPk(req.params.id)
        if (!payment) return res.status(404).send("payment not fa unt")


        await payment.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
