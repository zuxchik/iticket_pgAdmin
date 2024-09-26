const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swigger");

const adminRoute = require("./routes/admin.route");
const bookingRoute = require("./routes/booking.route");
const ticketRoute = require("./routes/ticket.route");
const genderRoute = require("./routes/gender.route");
const cartRoute = require("./routes/cart.route");
const customerAddressRoute = require("./routes/customer.address.route");
const customerCartRoute = require("./routes/customer.cart.route");
const customerRoute = require("./routes/customer.route");
const deliveryRoute = require("./routes/delivery.route");
const discountRoute = require("./routes/discaunt.route");
const districtRoute = require("./routes/district.route");
const eventRoute = require("./routes/event.route");
const eventTypeRoute = require("./routes/event.type.route");
const flatRoute = require("./routes/flat.route");
const humanCategoryRoute = require("./routes/human.category.route");
const languageRoute = require("./routes/lenguage.route"); 
const paymentRoute = require("./routes/payment.route");  
const regionRoute = require("./routes/region.route");  
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

app.use("/admin", adminRoute);
app.use("/booking", bookingRoute);
app.use("/ticket", ticketRoute);
app.use("/gender", genderRoute);
app.use("/cart", cartRoute);
app.use("/customerAddress", customerAddressRoute);
app.use("/customerCart", customerCartRoute);
app.use("/customer", customerRoute);
app.use("/delivery", deliveryRoute);
app.use("/discount", discountRoute);
app.use("/district", districtRoute);
app.use("/event", eventRoute);
app.use("/eventType", eventTypeRoute);
app.use("/flat", flatRoute);
app.use("/humanCategory", humanCategoryRoute);
app.use("/language", languageRoute);
app.use("/payment", paymentRoute);
app.use("/region", regionRoute);
app.use("/seat", seatRoute);
app.use("/seatType", seatTypeRoute);
app.use("/sector", sectorRoute);
app.use("/ticketType", ticketTypeRoute);
app.use("/venue", venueRoute);
app.use("/venueType", venueTypeRoute);
app.use("/venuePhoto", venuePhotoRoute);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
});
