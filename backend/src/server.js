import express from "express"
import weaponRoute from './routes/weapon.route.js'


const app = express()
const PORT = 3005;

app.use(express.json())

app.use("/weapons", weaponRoute)

app.listen(PORT, console.log("server started on port " + PORT))