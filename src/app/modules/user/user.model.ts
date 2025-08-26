import { model, Schema } from "mongoose"
import bcrypt from "bcryptjs";
export type IUserRole = "student"|"teacher"| "admin"

export interface IUser{
    name: string,
    email: string,
    password: string,
    role: IUserRole,
    isActive: boolean,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
  
}

const userSchema=new Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        enum: ["student", "teacher", "admin"],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    
}, {
    timestamps:true
})

userSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10)
    next()
})

userSchema.post('save',async function(doc,next){
    doc.password=undefined as unknown as string
    next()
})



export const User = model<IUser>("User", userSchema)    




