const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swigger");

const adminRouter = require("./routes/admin.route");
const bookingRouter = require("./routes/booking.route");
const ticketRouter = require("./routes/ticket.route");
const genderRouter = require("./routes/gender.route");
const cartRouter = require("./routes/cart.route");
const customerAddressRouter = require("./routes/customer.address.route");
const customerCartRouter = require("./routes/customer.cart.route");
const customerRouter = require("./routes/customer.route");
const deliveriyRouter = require("./routes/delivery.route");
const discauntRouter = require("./routes/discaunt.route");
const districtRouter = require("./routes/district.route");
const eventRouter = require("./routes/event.route");
const eventTypeRouter = require("./routes/event.type.route");
const flatRouter = require("./routes/flat.route");
const humanCategoryRouter = require("./routes/human.category.route");
const lenuageRouter = require("./routes/lenguage.route"); 
const paymentRouter = require("./routes/payment.route");  
const regionRouter = require("./routes/region.route");  
const seatRouter = require("./routes/seat.route"); 
const seatTypeRouter = require("./routes/seat.type");  
const sectorRouter = require("./routes/sector.route"); 
const statusRouter = require("./routes/status.route"); 
const ticketTypeRouter = require("./routes/ticket.type.route");  
const venueRouter = require("./routes/venue.route"); 
const venueTypeRouter = require("./routes/venue.type.route");  
const venuePhotoRouter = require("./routes/venue.photo.route");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", adminRouter);
app.use("/api", bookingRouter);
app.use("/api", ticketRouter);
app.use("/api", genderRouter);
app.use("/api", cartRouter);
app.use("/api", customerAddressRouter);
app.use("/api", customerCartRouter);
app.use("/api", customerRouter);
app.use("/api", deliveriyRouter);
app.use("/api", discauntRouter);
app.use("/api", districtRouter);
app.use("/api", eventRouter);
app.use("/api", eventTypeRouter);
app.use("/api", flatRouter);
app.use("/api", humanCategoryRouter);
app.use("/api", lenuageRouter);
app.use("/api", paymentRouter);
app.use("/api", regionRouter);
app.use("/api", seatRouter);
app.use("/api", seatTypeRouter);
app.use("/api", statusRouter);
app.use("/api", sectorRouter);
app.use("/api", ticketTypeRouter);
app.use("/api", venueRouter);
app.use("/api", venueTypeRouter);
app.use("/api", venuePhotoRouter);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});
