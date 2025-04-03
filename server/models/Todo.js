const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, require: true },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      require: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;