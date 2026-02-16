// Import dotenv to load environment variables
require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const authRoutes = require("./routes/auth.routes");
const wallpaperRouts = require("./routes/wallpaper.routes");
const mongoose = require("mongoose");

const app = express();

// Use the MONGO_URI from the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.use(bodyparser.json());
app.use("/auth", authRoutes);
app.use("/wallpapers", wallpaperRouts);

// Use the PORT from the .env file
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
