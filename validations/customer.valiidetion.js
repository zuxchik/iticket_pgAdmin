const Joi = require("joi")

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string(),
        last_name: Joi.string().min(1).max(50),
        phone: Joi.string().min(1).max(50).required(),
        hashed_password: Joi.string().min(1).max(50).required(),
        email: Joi.string().min(13).max(50).required(),
        birth_date: Joi.date().required(),
        gender_id: Joi.number().min(1).max(50).required(),
        lang_id: Joi.number().min(1).max(50).required()
    })
    return schema.validate(customer)
}

module.exports = { validateCustomer }