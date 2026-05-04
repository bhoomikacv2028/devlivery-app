import Order from "./models/Order.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import products from "./product.js";
dotenv.config(); 
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("../public/images"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));
// ROOT
app.get("/", (req, res) => {
  res.send("hello bhoomi hiii 🚀");
});


// PRODUCTS
app.get("/products", (req, res) => {
  
    res.json(products);
});
app.post("/api/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    res.json(savedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save order" });
  }
});
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});