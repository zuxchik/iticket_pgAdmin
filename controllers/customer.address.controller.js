const { CustomerAddress, District, Region, Flat} = require("../models")
const { validateCustomerAddress } = require("../validations/customer.address.validetion")

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
                    model: District,
                    as: "district"
                },
                {
                    model: Region,
                    as: "region"
                },
                {
                    model: Flat,
                    as: "flat"
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
