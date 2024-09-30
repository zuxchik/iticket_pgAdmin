const Joi = require("joi")

const validatevenueType = (venueType) => {
    const schema = Joi.object({   
        name: Joi.string().required()
    })
    return schema.validate(venueType)
}

module.exports = { validatevenueType }