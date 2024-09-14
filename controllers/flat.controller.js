const { Flat } = require("../models")
const { validateFlat } = require("../validations/flat.validetion")

exports.createFlat = async (req, res) => {
    const { error } = validateFlat(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const flat = await Flat.create(req.body)
        res.status(201).send(flat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geFlat = async (req, res) => {
    try {
        const flat = await Flat.findAll()
        res.status(201).send(flat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getFlatBiId = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id)
        if (!flat) return res.status(404).send("flat not faund")
        res.status(200).send(flat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataFlat = async (req, res) => {
    const { error } = validateFlat(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const flat = await Flat.findByPk(req.params.id)
        if (!flat) return res.status(404).send("flat not fa unt")


        await flat.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletFlat = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id)
        if (!flat) return res.status(404).send("flat not fa unt")


        await flat.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
