import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl.js";

const router = Router();

router.get("/", indexCtrl.LocationCtrl.findAll);
router.get("/:id", indexCtrl.LocationCtrl.findOne);
router.post("/", indexCtrl.LocationCtrl.create);
router.put("/:id", indexCtrl.LocationCtrl.update);
router.delete("/:id", indexCtrl.LocationCtrl.deleted);
// router.get("/sql/:id", indexCtrl.LocationCtrl.qureySQL);

export default router;
