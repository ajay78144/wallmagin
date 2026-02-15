const express = require("express");
const router = express.Router();
const authMiddleware = require ("../middleware/auth.middleware")


const {
  createWallpaper,
  getWallpapers,
  getByCategory,
  updateWallpaper,
  deleteWallpaper,
} = require("../controler/wallpaper.controler");


// CREATE
router.post("/create",authMiddleware, createWallpaper);

// READ
router.get("/", getWallpapers);
router.get("/category/:category", getByCategory);

// UPDATE
router.put("/:id", updateWallpaper);

// DELETE
router.delete("/:id", deleteWallpaper);


module.exports = router;


