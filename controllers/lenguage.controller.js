const { Language } = require("../models")
const { validateleng } = require("../validations/lenguage.validetion")

exports.createLanguage = async (req, res) => {
    const { error } = validateleng(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const language = await Language.create(req.body)
        res.status(201).send(language)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getLanguages = async (req, res) => {
    try {
        const language = await Language.findAll()
        res.status(201).send(language)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geLanguagesBiId = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id)
        if (!language) return res.status(404).send("Languages not faund")
        res.status(200).send(language)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataLanguages = async (req, res) => {
    const { error } = validateleng(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const language = await Language.findByPk(req.params.id)
        if (!language) return res.status(404).send("Usver not fa unt")


        await language.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletLanguages = async (req, res) => {
    try {
        const language = await Language.findByPk(req.params.id)
        if (!language) return res.status(404).send("language not fa unt")


        await language.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
