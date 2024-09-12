const express = require("express")
const dotenv = require("dotenv")
const { sequelize } = require("./models")
const setupSwagger = require("./swagger/swigger")

dotenv.config()

const app = express()
app.use(express.json())


const { adminRouter } = require("./routes/admin.route")
app.use("/adminRouter", adminRouter)

// const { bookingRouter } = require("./routes/booking.route")
// app.use("/bookingRouter", bookingRouter)

// const { TicketRouter } = require("./routes/ticket.route")
// app.use("/TicketRouter", TicketRouter)


setupSwagger(app)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server run in PORT ${PORT}`);
    })
})