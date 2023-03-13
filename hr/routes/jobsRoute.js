import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl.js";

const router = Router();

router.get("/", indexCtrl.JobsCtrl.findAll);
router.get("/:id", indexCtrl.JobsCtrl.findOne);
router.post("/", indexCtrl.JobsCtrl.create);
router.put("/:id", indexCtrl.JobsCtrl.update);
router.delete("/:id", indexCtrl.JobsCtrl.deleted);
// router.get("/sql/:id", indexCtrl.JobsCtrl.qureySQL);

export default router;
