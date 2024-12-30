import { group } from "node:console";
import GroupService, { CreateGroupPayload } from "../services/groups/group";
import UserService, { CreateUserPayload, GetUserTokenPayload } from "../services/users/user";

export const createGroup = async(req: any, res: any) => {
    const { name, description } = req.body;

    const group: CreateGroupPayload = {
        name: name,
        description: description,
        adminId: req.user.id
    }
    const result= await GroupService.createGroup(group)

    return res.status(200).json(result)

}

export const updateGroup = async(req: any, res: any) => {
    const { name, description, groupId } = req.body;

    const result= await GroupService.updateGroup({name, description, groupId})

    return res.status(200).json(result)

}

export const deleteGroup = async(req: any, res: any) => {
    const { firstName, lastName, email, password } = req.body;

    const user: CreateUserPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    const result= await UserService.createUser(user)

    return res.status(200).json(result)

}

export const getAllGroups = async(req: any, res: any) => {
    const { firstName, lastName, email, password } = req.body;

    const user: CreateUserPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    const result= await UserService.createUser(user)

    return res.status(200).json(result)

}

export const getGroupsByIds = async(req: any, res: any) => {
    const { groupIds } = req.body;

    
    const result= await GroupService.getGroupsByIds(groupIds)

    return res.status(200).json(result)

}

export const getGroupById = async(req: any, res: any) => {
    const { firstName, lastName, email, password } = req.body;

    const user: CreateUserPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    const result= await UserService.createUser(user)

    return res.status(200).json(result)

}

export const getGroupByName = async(req: any, res: any) => {
    const { firstName, lastName, email, password } = req.body;

    const user: CreateUserPayload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    const result= await UserService.createUser(user)

    return res.status(200).json(result)

}