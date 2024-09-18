const Joi = require("joi")

const validateHumanCategory = (humanCategory) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(25).required(),
        start_age: Joi.number().min(16).required(),
        finish_age: Joi.number().min(18).max(54).required(),
        gender_id: Joi.number().required()
    })
    return schema.validate(humanCategory)
}

module.exports = { validateHumanCategory }