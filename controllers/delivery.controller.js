const { Delivery } = require("../models")
const { validateDelivery } = require("../validations/delivery.validetion")

exports.createDelivery = async (req, res) => {
    const { error } = validateDelivery(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const delivery = await Delivery.create(req.body)
        res.status(201).send(delivery)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getDeliverys = async (req, res) => {
    try {
        const delivery = await Delivery.findAll()
        res.status(201).send(delivery)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geDeliverysBiId = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id)
        if (!delivery) return res.status(404).send("Deliverys not faund")
        res.status(200).send(delivery)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataDeliverys = async (req, res) => {
    const { error } = validateDelivery(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const delivery = await Delivery.findByPk(req.params.id)
        if (!delivery) return res.status(404).send("Usver not fa unt")


        await delivery.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletDeliverys = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id)
        if (!delivery) return res.status(404).send("delivery not fa unt")


        await delivery.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
