import express from "express";
import {create, list, show, remove} from "../controllers/ShelterController";

const router = express.Router();

router.get("/state", list);
router.get("/state/:id", show);
router.post("/state", create);
router.delete("/state/:id", remove);

export default router;
