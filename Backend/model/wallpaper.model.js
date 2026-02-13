const mongoose = require("mongoose");

const wallpaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Nature", "Pets", "Science", "Abstract", "Dark", "AI"],
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    isAIGenerated: {
      type: Boolean,
      default: false,
    },

    prompt: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallpaper", wallpaperSchema);
