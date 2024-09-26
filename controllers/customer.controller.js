const { Customer, Gender, Language } = require("../models")
const { validateCustomer } = require("../validations/customer.valiidetion")

exports.createCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customer = await Customer.create(req.body)
        res.status(201).send(customer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customer = await Customer.findAll()
        res.status(201).send(customer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geCustomersBiId = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id,{
            include:  [
                {
                    nodel: Gender,
                    as: "gender"
                },
                {
                    nodel: Language,
                    as: "language"
                }
            ]
        })
        if (!customer) return res.status(404).send("Customers not faund")
        res.status(200).send(customer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCustomers = async (req, res) => {
    const { error } = validateCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customer = await Customer.findByPk(req.params.id)
        if (!customer) return res.status(404).send("Usver not fa unt")


        await customer.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCustomers = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        if (!customer) return res.status(404).send("customer not fa unt")


        await customer.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
