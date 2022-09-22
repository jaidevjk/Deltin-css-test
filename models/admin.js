const mongoose = require("mongoose");

const AdminUserSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    phonenumber: { type: Number},
    password: { type: String, required: true },
    email: { type: String, required: true },
});

module.exports = mongoose.model("Admin",  AdminUserSchema);