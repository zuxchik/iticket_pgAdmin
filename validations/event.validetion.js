const Joi = require("joi")

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.number().min(5).max(20).required(),
        photo: Joi.string().max(20).required(),
        start_date: Joi.date().required(),
        start_time: Joi.date().required(),
        finish_date: Joi.date().required(),
        finshh_time: Joi.date().required(),
        info: Joi.string().max(20).required(),
        event_type_id: Joi.number().required(),
        human_category_id: Joi.number().required(),
        venue_id: Joi.number().required(),
        lang_id: Joi.number().required(),
        release_date: Joi.date().required()
    })
    return schema.validate(event)
}

module.exports = { validateEvent }