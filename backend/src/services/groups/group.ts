import { prismaClient } from "../../lib/db";

export interface CreateGroupPayload {
  name: string;
  description?: string;
  adminId: string;
}

class GroupService {
  public static getGroupById = async (id: string) => {
    try {
      const result = await prismaClient.group.findUnique({ where: { id } });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static createGroup(payload: CreateGroupPayload) {
    const { name, description, adminId } = payload;
    const createdAt = Date.now();

    try {
      const result = prismaClient.group.create({
        data: {
          name,
          description,
          createdAt,
          adminId,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  public static updateGroup = async (payload: any) => {
    const updatedData = {} as any;
    if (payload.name) updatedData.name = payload.name;
    if (payload.description) updatedData.description = payload.description;

    updatedData.updatedAt = Date.now();
    const groupId = payload.id;
    if (!groupId) {
      throw Error("GroupId doesn't exist");
    }

    try {
      const result = await prismaClient.group.update({
        where: { id: groupId },
        data: {
          updatedData,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static deleteGroup = async (groupId: string) => {
    if (!groupId) {
      throw Error("GroupId doesn't exist");
    }

    try {
      const result = await prismaClient.group.delete({
        where: { id: groupId }
      });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static getGroupsByIds = async (ids: string[]) => {
    try {
      const result = await prismaClient.group.findMany({
        where: { id: { in: ids } },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static getAllGroups = async () => {
    try {
      const result = await prismaClient.group.findMany();
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static getGroupsForUser = async (userId: string) => {
    try {
      const result = await prismaClient.group.findMany({
        where: { adminId: userId },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };

  public static getGroupByName = async (name: string) => {
    try {
      const result = await prismaClient.group.findUnique({ where: { name } });
      return result;
    } catch (error) {
      console.log(error);
      return error
    }
  };
}

export default GroupService;
