const express = require("express");

const router = express.Router();
const helpController = require("../../controller/helpController");
const pollController = require("../../controller/pollController");
const responseController = require("../../controller/responseController");


router.get("/help",helpController.helpDetails);


router.post("/poll", pollController.create);
router.get("/poll", pollController.getAllPolls);
router.delete("/poll/:id", pollController.destroy);
router.get("/poll/:id", pollController.getPoll);
router.patch("/poll", pollController.update);

 router.post("/response", responseController.create);
 router.get("/response/:pollid", responseController.getAllResponsesForAPoll);

module.exports = router;