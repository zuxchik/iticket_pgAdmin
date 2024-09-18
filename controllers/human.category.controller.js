const { HumanCategory, Gender } = require("../models")
const { validateHumanCategory } = require("../validations/human.category.validetion")

exports.createHumancategoory = async (req, res) => {
    const { error } = validateHumanCategory(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const humancategoory = await HumanCategory.create(req.body)
        res.status(201).send(humancategoory)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getHumancategoory = async (req, res) => {
    try {
        const humancategoory = await HumanCategory.findAll()
        res.status(201).send(humancategoory)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getHumancategooryBiId = async (req, res) => {
    try {
        const humancategoory = await HumanCategory.findByPk(req.params.id,{
            include:  [
                {
                    nodel: Gender,
                    as: "Gender"
                }
            ]
        })
        if (!humancategoory) return res.status(404).send("humancategoory not faund")
        res.status(200).send(humancategoory)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataHumancategoory = async (req, res) => {
    const { error } = validateHumanCategory(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const humancategoory = await HumanCategory.findByPk(req.params.id)
        if (!humancategoory) return res.status(404).send("humancategoory not fa unt")


        await humancategoory.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletHumancategoory = async (req, res) => {
    try {
        const humancategoory = await HumanCategory.findByPk(req.params.id)
        if (!humancategoory) return res.status(404).send("humancategoory not fa unt")


        await humancategoory.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
