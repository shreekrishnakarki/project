import express from "express";
import { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } from "../controller/hotelController.js";
import {verifyToken} from "../middlewares/authMiddleware.js"
const hotelRouter = express.Router();
hotelRouter.use(verifyToken);

hotelRouter.post("/createHotel", createHotel);
hotelRouter.get("/getHotel",verifyToken, getHotels);
hotelRouter.get("/getHotel/:id", verifyToken, getHotels);
hotelRouter.put("/updateHotel/:id",verifyToken, updateHotel);
hotelRouter.delete("/deleteHotel/:id",verifyToken, deleteHotel);
hotelRouter.use(verifyToken);


export default hotelRouter;