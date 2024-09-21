const { Discount } = require("../models")
const { validateDiscount } = require("../validations/discount.validetion")

exports.createDiscount = async (req, res) => {
    const { error } = validateDiscount(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const discount = await Discount.create(req.body)
        res.status(201).send(discount)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getDiscounts = async (req, res) => {
    try {
        const discount = await Discount.findAll()
        res.status(201).send(discount)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geDiscountsBiId = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id)
        if (!discount) return res.status(404).send("Discounts not faund")
        res.status(200).send(discount)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataDiscounts = async (req, res) => {
    const { error } = validateDiscount(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const discount = await Discount.findByPk(req.params.id)
        if (!discount) return res.status(404).send("Usver not fa unt")


        await discount.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletDiscounts = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id)
        if (!discount) return res.status(404).send("discount not fa unt")


        await discount.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
