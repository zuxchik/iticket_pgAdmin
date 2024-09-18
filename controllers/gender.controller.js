const { Gender } = require("../models")
const { validateGender } = require("../validations/gender.validetion")

exports.createGendeer = async (req, res) => {
    const { error } = validateGender(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const gendeer = await Gender.create(req.body)
        res.status(201).send(gendeer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getGendeer = async (req, res) => {
    try {
        const gendeer = await Gender.findAll()
        res.status(201).send(gendeer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getGendeerBiId = async (req, res) => {
    try {
        const gendeer = await Gender.findByPk(req.params.id)
        if (!gendeer) return res.status(404).send("gendeer not faund")
        res.status(200).send(gendeer)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataGendeer = async (req, res) => {
    const { error } = validateGender(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const gendeer = await Gender.findByPk(req.params.id)
        if (!gendeer) return res.status(404).send("gendeer not fa unt")


        await gendeer.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletGendeer = async (req, res) => {
    try {
        const gendeer = await Gender.findByPk(req.params.id)
        if (!gendeer) return res.status(404).send("gendeer not fa unt")


        await gendeer.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
