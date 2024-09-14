const { Admin } = require("../models")
const { validateAdmin } = require("../validations/admin.validetion")

exports.createAdmin = async (req, res) => {
    const { error } = validateAdmin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const admin = await Admin.create(req.body)
        res.status(201).send(admin)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getAdmins = async (req, res) => {
    try {
        const admin = await Admin.findAll()
        res.status(201).send(admin)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geAdminsBiId = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) return res.status(404).send("Admins not faund")
        res.status(200).send(admin)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataAdmins = async (req, res) => {
    const { error } = validateAdmin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) return res.status(404).send("Usver not fa unt")


        await admin.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletAdmins = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) return res.status(404).send("admin not fa unt")


        await admin.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
