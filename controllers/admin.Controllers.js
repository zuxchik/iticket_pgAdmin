const { admin } = require("../models")
const { validateAdmin } = require("../validetions/admin.validetion")

exports.createAdmin = async (req, res) => {
    const { error } = validateAdmin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const admins = await admin.create(req.body)
        res.status(201).send(admins)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getAdmins = async (req, res) => {
    try {
        const Admins = await admin.findAll()
        res.status(201).send(Admins)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.geAdminsBiId = async (req, res) => {
    try {
        const Admins = await admin.findByPk(req.params.id, {
            include: {
                model: Customer,
                as: "customer"
            },
        })
        if (!Admins) return res.status(404).send("Admins not faund")
        res.status(200).send(Admins)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataAdmins = async (req, res) => {
    const { error } = validateAdmin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const Admins = await admin.findByPk(req.params.id)
        if (!Admins) return res.status(404).send("Usver not fa unt")


        await Admins.updata(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletAdmins = async (req, res) => {
    try {
        const Admins = await admin.findByPk(req.params.id)
        if (!Admins) return res.status(404).send("Admins not fa unt")


        await Admins.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

