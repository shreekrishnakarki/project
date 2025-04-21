import app from "./app.js";
import hotelRoute from "./routes/hotelRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
import authRouter from "./routes/authRoute.js";
import cors from "cors";

app.use("/api/hotels", hotelRoute);
app.use("/api/reservations", reservationRoute);
app.use("/api/users", authRouter); 
app.use("/api/auth", authRouter);
app.use(cors());




app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});
