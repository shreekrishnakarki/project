import express from "express";
import { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } from "../controller/hotelController.js";
import {verifyToken} from "../middlewares/authMiddleware.js"
const hotelRouter = express.Router();
hotelRouter.use(verifyToken);

hotelRouter.post("/create", createHotel);
hotelRouter.get("/get", getHotels);
hotelRouter.get("/get/:id", getHotelById);
hotelRouter.put("/update/:id", updateHotel);
hotelRouter.delete("/delete/:id", deleteHotel);

export default hotelRouter;