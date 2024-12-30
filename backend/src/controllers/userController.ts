import UserService, { CreateUserPayload, GetUserTokenPayload } from "../services/users/user";

export const signup = async(req: any, res: any) => {
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

export const login = async(req: any, res: any) => {
    const { email, password } = req.body;
    const payload: GetUserTokenPayload = {
        email: email,
        password: password
    }

    try {
        const result= await UserService.getUserToken(payload)
        return res.status(200).json(result)
    } catch(error) {
        return res.status(403).json({"message": error})
    }

}

export const getCurrentLoggedInUser = async(req: any, res: any) => {
    const token = req.headers['token']
    if(!token) return res.status(400).json({ error: 'No User' });
    try{
        const user = UserService.decodeJWTToken(token as string)
        req.user = user
        return res.status(200).json(user)
    }
    catch(error){
        return res.status(400).json({ error: 'No User' });
    }
}