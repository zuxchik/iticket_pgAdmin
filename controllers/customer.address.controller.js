const { CustomerAddress, District, Region, Ticket, Flat, Country } = require("../models")
const { validateCustomerAddress } = require("../validations/customer.address.validetion")

const sequelize = require("../config/database")

District.associate(sequelize.models)
Region.associate(sequelize.models)
Country.associate(sequelize.models)
Flat.associate(sequelize.models)
Ticket.associate(sequelize.models)

exports.createCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerAddress = await CustomerAddress.create(req.body)
        res.status(201).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomerAddresss = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findAll()
        res.status(201).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geCustomerAddresssBiId = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id,{
            include:  [
                {
                    nodel: District,
                    as: "district"
                },
                {
                    model: Region,
                    as: "region"
                },
                {
                    model: Ticket,
                    as: "ticket"
                },
                {
                    model: Flat,
                    as: "flat"
                },
                {
                    model: Country,
                    as: "country"
                }
            ]
        })
        if (!customerAddress) return res.status(404).send("CustomerAddresss not faund")
        res.status(200).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCustomerAddresss = async (req, res) => {
    const { error } = validateCustomerAddress(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id)
        if (!customerAddress) return res.status(404).send("Usver not fa unt")


        await customerAddress.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCustomerAddresss = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id)
        if (!customerAddress) return res.status(404).send("customerAddress not fa unt")


        await customerAddress.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
