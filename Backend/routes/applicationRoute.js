import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applyJob, getApplicant, getAppliedJobs, updateStatus } from "../controllers/applicationController.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicant);
router.route("/status/:id/update").post(isAuthenticated,updateStatus);

export default router;