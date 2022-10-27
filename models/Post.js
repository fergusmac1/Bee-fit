const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  setweight1: {
    type: Number,
    required: true,
  },
  reps1: {
    type: Number,
    required: true,
  },
  setweight2: {
    type: Number,
    required: true,
  },
  reps2: {
    type: Number,
    required: true,
  },
  setweight3: {
    type: Number,
    required: true,
  },
  reps3: {
    type: Number,
    required: true,
  },
  setweight4: {
    type: Number,
    required: true,
  },
  reps4: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
