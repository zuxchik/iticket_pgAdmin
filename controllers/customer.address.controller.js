const { CustomerAddresss, District, Region, Flat} = require("../models")
const { validateCustomerAddress } = require("../validations/customer.address.validetion")

exports.createCustomerAddresss = async (req, res) => {
    const { error } = validateCustomerAddress(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerAddress = await CustomerAddresss.create(req.body)
        res.status(201).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomerAddressss = async (req, res) => {
    try {
        const customerAddress = await CustomerAddresss.findAll()
        res.status(201).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geCustomerAddressssBiId = async (req, res) => {
    try {
        const customerAddress = await CustomerAddresss.findByPk(req.params.id,{
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
                    as: "flats"
                }
            ]
        })
        if (!customerAddress) return res.status(404).send("CustomerAddressss not faund")
        res.status(200).send(customerAddress)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCustomerAddressss = async (req, res) => {
    const { error } = validateCustomerAddress(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customerAddress = await CustomerAddresss.findByPk(req.params.id)
        if (!customerAddress) return res.status(404).send("Usver not fa unt")


        await customerAddress.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCustomerAddressss = async (req, res) => {
    try {
        const customerAddress = await CustomerAddresss.findByPk(req.params.id)
        if (!customerAddress) return res.status(404).send("customerAddress not fa unt")


        await customerAddress.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
