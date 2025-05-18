import { app } from "./app.js";
import { dotenv } from "dotenv";
dotenv.config({
  path: "./.env"
})
const PORT = process.env.PORT || 8001

app.listen(PORT, ()=>{
  console.log(`APP IS LISTENING AT ${PORT}`)
})