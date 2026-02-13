const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

      mobile: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[6-9]\d{9}$/.test(value); // Indian mobile validation
        },
        message: "Invalid mobile number",
      },
    },


    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
        validate: {
        validator: function (value) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/.test(
            value
          );
        },
        message:
          "Password must contain uppercase, lowercase, number and special character",
      },

    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
