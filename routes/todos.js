const express = require('express');

const router = express.Router();

const { createtodo } = require("../controllers/createtodo");

const { gettodo } = require("../controllers/gettodo");

const { gettodobyid } = require("../controllers/gettodobyid");

const { updatetodo } = require("../controllers/updatetodo");

const { deletetodo } = require("../controllers/deletetodo");


router.post("/createtodo", createtodo);

router.get("/gettodo", gettodo);

router.get("/gettodo/:id", gettodobyid);

router.put("/updatetodo/:id", updatetodo);

router.delete("/deletetodo/:id", deletetodo);

module.exports = router;