const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swigger");

const adminRoute = require("./routes/admin.route");
const bookingRoute = require("./routes/booking.route");
const ticketRoute = require("./routes/ticket.route");
const genderRouter = require("./routes/gender.route");
const cartRoute = require("./routes/cart.route");
const customerAddressRoute = require("./routes/customer.address.route");
const customerCartRoute = require("./routes/customer.cart.route");
const customerRoute = require("./routes/customer.route");
const deliveriyRouter = require("./routes/delivery.route");
const discauntRouter = require("./routes/discaunt.route");
const districtRoute = require("./routes/district.route");
const eventRoute = require("./routes/event.route");
const eventTypeRoute = require("./routes/event.type.route");
const flatRoute = require("./routes/flat.route");
const humanCategoryRouter = require("./routes/human.category.route");
const lenuageRouter = require("./routes/lenguage.route"); 
const paymentRoute = require("./routes/payment.route");  
const regionRouter = require("./routes/region.route");  
const seatRoute = require("./routes/seat.route"); 
const seatTypeRoute = require("./routes/seat.type");  
const sectorRoute = require("./routes/sector.route"); 
const ticketTypeRoute = require("./routes/ticket.type.route");  
const venueRoute = require("./routes/venue.route"); 
const venueTypeRoute = require("./routes/venue.type.route");  
const venuePhotoRoute = require("./routes/venue.photo.route");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", adminRoute);
app.use("/api", bookingRoute);
app.use("/api", ticketRoute);
app.use("/api", genderRouter);
app.use("/api", cartRoute);
app.use("/api", customerAddressRoute);
app.use("/api", customerCartRoute);
app.use("/api", customerRoute);
app.use("/api", deliveriyRouter);
app.use("/api", discauntRouter);
app.use("/api", districtRoute);
app.use("/api", eventRoute);
app.use("/api", eventTypeRoute);
app.use("/api", flatRoute);
app.use("/api", humanCategoryRouter);
app.use("/api", lenuageRouter);
app.use("/api", paymentRoute);
app.use("/api", regionRouter);
app.use("/api", seatRoute);
app.use("/api", seatTypeRoute);
app.use("/api", sectorRoute);
app.use("/api", ticketTypeRoute);
app.use("/api", venueRoute);
app.use("/api", venueTypeRoute);
app.use("/api", venuePhotoRoute);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});
