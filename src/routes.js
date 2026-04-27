import express from "express"
import {handlesenddata} from "./controller.js"


const router=express.Router()

router.post("/senddata/:email",handlesenddata)

export default router