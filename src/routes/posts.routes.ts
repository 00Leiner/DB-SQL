import { Router } from "express";
import { getPosts } from "../controllers/posts.controller";

const router = Router();

router.route("/").get(getPosts);

export default router;
