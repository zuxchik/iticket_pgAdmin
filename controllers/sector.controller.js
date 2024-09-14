const { Sector } = require("../models")
const { validateSector } = require("../validetions/sectorvalidetion")

exports.createSector = async (req, res) => {
    const { error } = validateSector(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const sector = await Sector.create(req.body)
        res.status(201).send(sector)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getSector = async (req, res) => {
    try {
        const sector = await Sector.findAll()
        res.status(201).send(sector)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getSectorBiId = async (req, res) => {
    try {
        const sector = await Sector.findByPk(req.params.id)
        if (!sector) return res.status(404).send("sector not faund")
        res.status(200).send(sector)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataSector = async (req, res) => {
    const { error } = validateSector(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const sector = await Sector.findByPk(req.params.id)
        if (!sector) return res.status(404).send("sector not fa unt")


        await sector.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletSector = async (req, res) => {
    try {
        const sector = await Sector.findByPk(req.params.id)
        if (!sector) return res.status(404).send("sector not fa unt")


        await sector.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
