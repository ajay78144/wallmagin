const Wallpaper = require("../model/wallpaper.model");

// ================= CREATE =================
exports.createWallpaper = async (req, res) => {
  try {
    const wallpaper = await Wallpaper.create(req.body);
    res.status(201).json({
      success: true,
      message: "Wallpaper created",
      data: wallpaper,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= READ ALL =================
exports.getWallpapers = async (req, res) => {
  try {
    const wallpapers = await Wallpaper.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: wallpapers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= READ BY CATEGORY =================
exports.getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const wallpapers = await Wallpaper.find({ category });
    res.status(200).json({ success: true, data: wallpapers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= UPDATE =================
exports.updateWallpaper = async (req, res) => {
  try {
    const wallpaper = await Wallpaper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Wallpaper updated",
      data: wallpaper,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= DELETE =================
exports.deleteWallpaper = async (req, res) => {
  try {
    await Wallpaper.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Wallpaper deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

