const Joi = require("joi")

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(20).required(),
        login: Joi.string().min(12).max(14).required(),
        hashed_password: Joi.string().min(12).max(14).required(),
        is_active: Joi.boolean().required(),
        is_creator: Joi.boolean().required()
    })
    return schema.validate(admin)
}

module.exports = { validateAdmin }