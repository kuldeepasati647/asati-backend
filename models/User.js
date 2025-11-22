const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    UserId: String, 
    name: String,
    email: String,
    password: String,
    address: String,
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
