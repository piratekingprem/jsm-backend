const express = require('express');
const router = express.Router();

// App Controller
const testController = require("../controllers/test");

// Test_API
router.get("/test",testController.get_test);
router.post("/test",testController.store_test);

module.exports = router;