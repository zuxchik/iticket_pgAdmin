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
const deliveryRouter = require("./routes/delivery.route");
const discountRouter = require("./routes/discount.route");
const districtRouter = require("./routes/district.route");
const eventRouter = require("./routes/event.route");
const eventTypeRouter = require("./routes/event.type.route");
const flatRouter = require("./routes/flat.route");
const humanCategoryRouter = require("./routes/human.category.route");
const languageRouter = require("./routes/language.route"); 
const paymentRouter = require("./routes/payment.route");  
const regionRouter = require("./routes/region.route");  
const seatRouter = require("./routes/seat.route"); 
const seatTypeRouter = require("./routes/seat.type.route");  
const sectorRouter = require("./routes/sector.route"); 
const ticketTypeRouter = require("./routes/ticket.type.route");  
const venueRouter = require("./routes/venue.route"); 
const venueTypeRouter = require("./routes/venue.type.route");  
const venuePhotoRouter = require("./routes/venue.photo.route");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/booking", bookingRouter);
app.use("/ticket", ticketRouter);
app.use("/gender", genderRouter);
app.use("/cart", cartRouter);
app.use("/customerAddress", customerAddressRouter);
app.use("/customerCart", customerCartRouter);
app.use("/customer", customerRouter);
app.use("/delivery", deliveryRouter);
app.use("/discount", discountRouter);
app.use("/district", districtRouter);
app.use("/event", eventRouter);
app.use("/eventType", eventTypeRouter);
app.use("/flat", flatRouter);
app.use("/humanCategory", humanCategoryRouter);
app.use("/language", languageRouter);
app.use("/payment", paymentRouter);
app.use("/region", regionRouter);
app.use("/seat", seatRouter);
app.use("/seatType", seatTypeRouter);
app.use("/sector", sectorRouter);
app.use("/ticketType", ticketTypeRouter);
app.use("/venue", venueRouter);
app.use("/venueType", venueTypeRouter);
app.use("/venuePhoto", venuePhotoRouter);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});
