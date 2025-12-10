import mongoose from "mongoose"

const unitSchema = new mongoose.Schema({
  weaponName: {
    type: String,
    required: true,
  },

})