const { Cart, Customer, Status, Ticket } = require("../models")
const { validateCart } = require("../validations/cart.validetion")

const sequelize = require("../config/database")

Status.associate(sequelize.models)
Customer.associate(sequelize.models)
Ticket.associate(sequelize.models)

exports.createCart = async (req, res) => {
    const { error } = validateCart(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const cart = await Cart.create(req.body)
        res.status(201).send(cart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCarts = async (req, res) => {
    try {
        const cart = await Cart.findAll()
        res.status(201).send(cart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geCartsBiId = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id,{
            include:  [
                {
                    nodel: Customer,
                    as: "customer"
                },
                {
                    model: Status,
                    as: "status"
                },
                {
                    model: Ticket,
                    as: "ticket"
                }
            ]
        })
        if (!cart) return res.status(404).send("Carts not faund")
        res.status(200).send(cart)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCarts = async (req, res) => {
    const { error } = validateCart(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const cart = await Cart.findByPk(req.params.id)
        if (!cart) return res.status(404).send("Usver not fa unt")


        await cart.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCarts = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id)
        if (!cart) return res.status(404).send("cart not fa unt")


        await cart.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
