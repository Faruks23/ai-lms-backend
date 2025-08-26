import { IUser, User } from "./user.model"


const signUpInterface=async(payload:IUser)=>{
     
    const userData = {
        ...payload,
        
     }

    const result=await User.create(payload)
    return result
}



export const userService={
    signUpInterface
}