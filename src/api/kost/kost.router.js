const express = require('express');
const router = express.Router();

const {validateKost} = require('./kost.validation');
const controller = require('./kost.controller');

router.get("/", controller.read);
router.get("/:id", controller.read);
router.post("/", validateKost, controller.add);
router.delete("/:id", controller.delete);
router.put("/:id", validateKost, controller.put);

module.exports = router;
