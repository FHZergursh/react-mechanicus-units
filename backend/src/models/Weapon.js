import mongoose from "mongoose"

const weaponSchema = new mongoose.Schema({
  unit: {
    type: String,
    required: true,
  },
  weaponName: {
    type: String,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  ap: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },


})