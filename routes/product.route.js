import express from "express";
import { Product } from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new Error("Product not found");
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/products", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = new Product({ name, price, quantity });
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) throw new Error("Product not found");

    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) throw new Error("Product not found");
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
