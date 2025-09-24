const express = require("express");
const getDashboard = require("../controllers/dashBoardController");
const authMiddleware = require("../middleware/authmiddleware");

const dashboardRouter = express.Router();

// Protected route → only logged-in users can access
dashboardRouter.get("/", authMiddleware, getDashboard);

module.exports = dashboardRouter;
