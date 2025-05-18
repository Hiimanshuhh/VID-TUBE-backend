import { app } from "./app.js";

const PORT = 8001

app.listen(PORT, ()=>{
  console.log(`APP IS LISTENING AT ${PORT}`)
})