import express from "express"

const router = express.Router()

router.get("/get", (req, res) => {
  res.send("get all weapons")
} )


export default router