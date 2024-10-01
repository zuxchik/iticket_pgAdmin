const { Status } = require("../models")
const { validateStatus } = require("../validations/status.validetion")

exports.createStatus = async (req, res) => {
    const { error } = validateStatus(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const status = await Status.create(req.body)
        res.status(201).send(status)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getStatus = async (req, res) => {
    try {
        const status = await Status.findAll()
        res.status(201).send(status)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getStatusBiId = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id)
        if (!status) return res.status(404).send("status not faund")
        res.status(200).send(status)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataStatus = async (req, res) => {
    const { error } = validateStatus(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const status = await Status.findByPk(req.params.id)
        if (!status) return res.status(404).send("status not fa unt")


        await status.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id)
        if (!status) return res.status(404).send("status not fa unt")


        await status.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
