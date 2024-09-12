const Joi = require("joi")

const validateTicket = (Ticket) => {
    const schema = Joi.object({
        event_id: Joi.string().required(),
        seat_id: Joi.string().min(12).max(14).required(),
        price: Joi.string().required(),
        service_fee: Joi.string().required(),
        status_id: Joi.string().required(),
        ticket_type: Joi.string().required()
    })
    return schema.validate(Ticket)
}

module.exports = { validateTicket }