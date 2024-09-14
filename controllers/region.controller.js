const { Region } = require("../models")
const { validateRegion } = require("../validations/region.validetion")

exports.createRegion = async (req, res) => {
    const { error } = validateRegion(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const region = await Region.create(req.body)
        res.status(201).send(region)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getRegion = async (req, res) => {
    try {
        const region = await Region.findAll()
        res.status(201).send(region)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geRegionBiId = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id)
        if (!region) return res.status(404).send("region not faund")
        res.status(200).send(region)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataRegion = async (req, res) => {
    const { error } = validateRegion(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const region = await Region.findByPk(req.params.id)
        if (!region) return res.status(404).send("region not fa unt")


        await region.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id)
        if (!region) return res.status(404).send("region not fa unt")


        await region.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
