import { prismaClient } from "../../lib/db";

export interface CreateMessagePayload {
  text: string;
  groupId: string;
  userId: string;
}

class MessageService {
  public static getMessageById = async (id: string) => {
    try {
      const result = await prismaClient.message.findUnique({ where: { id } });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  public static createMessage = async (payload: CreateMessagePayload) => {
    const { text, groupId, userId } = payload;
    const createdAt = new Date();

    try {
      const result = await prismaClient.message.create({
        data: {
          text,
          groupId,
          userId,
          createdAt,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  public static updateMessage = async (id: string, text: string) => {
    const updatedAt = new Date();

    try {
      const result = await prismaClient.message.update({
        where: { id },
        data: {
          text,
          updatedAt,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  public static deleteMessage = async (id: string) => {
    try {
      const result = await prismaClient.message.delete({
        where: { id },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  public static getMessagesByGroupId = async (groupId: string) => {
    try {
      const result = await prismaClient.message.findMany({
        where: { groupId },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  public static getMessagesByUserId = async (userId: string) => {
    try {
      const result = await prismaClient.message.findMany({
        where: { userId },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

export default MessageService;