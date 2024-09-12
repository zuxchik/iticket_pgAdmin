const Joi = require("joi")

const validateBooking = (booking) => {
    const schema = Joi.object({
        cart_id: Joi.string().required(),
        createdAt: Joi.string().min(12).max(14).required(),
        hashed_password: Joi.string().required(),
        payment_method_id: Joi.string().required(),
        discount_coupon_id: Joi.string().required(),
        status_id: Joi.string().required()
    })
    return schema.validate(booking)
}

module.exports = { validateBooking }