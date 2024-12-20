const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  purchaseDate: { type: Date, default: Date.now }, // Дата покупки
  status: { type: String, default: "completed" }, // Статус покупки
});

module.exports = mongoose.model("Purchase", purchaseSchema);