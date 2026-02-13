const express = require("express");
const bodyparser = require("body-parser")
const authRoutes = require("./routes/auth.routes");
const wallpaperRouts = require("./routes/wallpaper.routes");
const mongoose = require("mongoose");


const app=express();


mongoose.connect("mongodb+srv://ajay781442:kambojboy78@cluster0.gearez4.mongodb.net/?appName=Cluster0")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));



app.use(bodyparser.json());

app.use("/auth", authRoutes);

app.use("/wallpapers", wallpaperRouts);







app.listen(3000, () => { 
  console.log("Server running on port 3000");
});
