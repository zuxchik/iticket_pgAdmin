const { District } = require("../models")
const { validateDistrict } = require("../validations/district.validetion")

exports.createDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const district = await District.create(req.body)
        res.status(201).send(district)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getDistricts = async (req, res) => {
    try {
        const district = await District.findAll()
        res.status(201).send(district)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geDistrictsBiId = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id)
        if (!district) return res.status(404).send("Districts not faund")
        res.status(200).send(district)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataDistricts = async (req, res) => {
    const { error } = validateDistrict(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const district = await District.findByPk(req.params.id)
        if (!district) return res.status(404).send("Usver not fa unt")


        await district.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletDistricts = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id)
        if (!district) return res.status(404).send("district not fa unt")


        await district.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
