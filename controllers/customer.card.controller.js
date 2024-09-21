const { CustomerCart } = require("../models")
const { validateCustomerCart } = require("../validations/customer.cart.validetion")

exports.createCustomerCart = async (req, res) => {
    const { error } = validateCustomerCart(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerCart = await CustomerCart.create(req.body)
        res.status(201).send(customerCart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomerCarts = async (req, res) => {
    try {
        const customerCart = await CustomerCart.findAll()
        res.status(201).send(customerCart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geCustomerCartsBiId = async (req, res) => {
    try {
        const customerCart = await CustomerCart.findByPk(req.params.id)
        if (!customerCart) return res.status(404).send("CustomerCarts not faund")
        res.status(200).send(customerCart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCustomerCarts = async (req, res) => {
    const { error } = validateCustomerCart(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerCart = await CustomerCart.findByPk(req.params.id)
        if (!customerCart) return res.status(404).send("Usver not fa unt")


        await customerCart.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCustomerCarts = async (req, res) => {
    try {
        const customerCart = await CustomerCart.findByPk(req.params.id)
        if (!customerCart) return res.status(404).send("customerCart not fa unt")


        await customerCart.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
