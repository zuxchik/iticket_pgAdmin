const Joi = require("joi")

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().min(12).max(20).required(),
        photo: Joi.string().min(12).max(20).required(),
        start_date: Joi.date().min(12).max(20).required(),
        start_time: Joi.date().min(12).max(20).required(),
        finish_date: Joi.date().min(12).max(20).required(),
        finshh_time: Joi.date().min(12).max(20).required(),
        info: Joi.string().min(12).max(20).required(),
        event_type_id: Joi.string().required(),
        human_category_id: Joi.string().required(),
        venue_id: Joi.string().required(),
        lang_id: Joi.string().required(),
        release_date: Joi.date().min(12).max(20).required()
    })
    return schema.validate(event)
}

module.exports = { validateEvent }