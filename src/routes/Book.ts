import express from "express";
import controller from "../controllers/Book";

const router = express.Router();

router.get("/get/books", controller.getAllBooks);

export default router;
