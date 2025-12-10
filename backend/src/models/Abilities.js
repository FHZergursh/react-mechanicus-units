import mongoose from "mongoose"

const unitSchema = new mongoose.Schema({
  abilityName: {
    type: String,
    required: true,
  }
})