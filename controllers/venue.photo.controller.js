const { VenueType, Venue } = require("../models")
const { validateVenuePhoto } = require("../validations/venue.photo.validetion")

exports.createVunuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venuephoto = await VenueType.create(req.body)
        res.status(201).send(venuephoto)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getVenuPhoto = async (req, res) => {
    try {
        const venuephoto = await VenueType.findAll()
        res.status(201).send(venuephoto)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getVenuPhotoBiId = async (req, res) => {
    try {
        const venuephoto = await VenueType.findByPk(req.params.id,{
            include: [
                {
                    model: Venue,
                    as: "venue"
                }
            ]
        })
        if (!venuephoto) return res.status(404).send("VenueType not faund")
        res.status(200).send(venuephoto)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataVenuPhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const venuephoto = await VenueType.findByPk(req.params.id)
        if (!venuephoto) return res.status(404).send("VenueType not fa unt")


        await venuephoto.update(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletVenuPhoto = async (req, res) => {
    try {
        const venuephoto = await VenueType.findByPk(req.params.id)
        if (!venuephoto) return res.status(404).send("venuephoto not fa unt")


        await venuephoto.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}
