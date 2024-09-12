const express = require("express")
const dotenv = require("dotenv")
const { sequelize } = require("./models")
const setupSwagger = require("./swagger/swigger")

dotenv.config()

const app = express()
app.use(express.json())


const adminRoute = require("./routes/admin.route")
app.use("/adminRoute", adminRoute)

const bookengRoute = require("./routes/booking.route")
app.use("/bookengRoute", bookengRoute)

const adminRoute = require("./routes/admin.route")
app.use("/adminRoute", adminRoute)


setupSwagger(app)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server run in PORT ${PORT}`);
    })
})