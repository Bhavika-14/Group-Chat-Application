import UserService from "../services/users/user"

exports.module = async(req: any, res:any, next: any) => {
    const token = req.headers['token']
    if(!token) return res.status(401).json({ error: 'Unauthorized - Token missing' });
    try{
        const user = UserService.decodeJWTToken(token as string)
        req.user = user
        next()
    }
    catch(error){
        return res.status(403).json({ error: 'Forbidden - Invalid token' });
    }

}