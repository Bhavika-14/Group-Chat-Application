const express = require('express')
const groupRouter = express.Router()
import * as groupController from "../controllers/groupController"
const auth = require("../middleware/auth")

groupRouter.post("/create",auth,groupController.createGroup)
groupRouter.post("/update",auth,groupController.updateGroup)
groupRouter.get("/delete", auth,groupController.deleteGroup)
groupRouter.get("/:id", auth,groupController.getGroupById)
groupRouter.get("/:name", auth,groupController.getGroupByName)

export default groupRouter;