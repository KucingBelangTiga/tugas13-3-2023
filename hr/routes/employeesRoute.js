import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl.js";

const router = Router();

router.get("/", indexCtrl.EmployeesCtrl.findAll);
router.get("/:id", indexCtrl.EmployeesCtrl.findOne);
router.post("/", indexCtrl.EmployeesCtrl.create);
router.put("/:id", indexCtrl.EmployeesCtrl.update);
router.delete("/:id", indexCtrl.EmployeesCtrl.deleted);
// router.get("/sql/:id", indexCtrl.EmployeesCtrl.qureySQL);

export default router;
