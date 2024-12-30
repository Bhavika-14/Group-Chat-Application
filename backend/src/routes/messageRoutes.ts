const express = require('express');
const messageRouter = express.Router();
import * as messageController from "../controllers/messageController";
const auth = require("../middleware/auth");

messageRouter.post("/create", auth, messageController.createMessage);
messageRouter.post("/update", auth, messageController.updateMessage);
messageRouter.get("/delete", auth, messageController.deleteMessage);
messageRouter.get("/:id", auth, messageController.getMessageById);
messageRouter.get("/group/:groupId", auth, messageController.getMessagesByGroupId);
messageRouter.get("/user/:userId", auth, messageController.getMessagesByUserId);

export default messageRouter;