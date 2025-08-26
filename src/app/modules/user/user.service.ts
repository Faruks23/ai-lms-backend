import { Schema } from "mongoose"
import AppError from "../../../errors/AppError"
import { accessToken } from "../../../utils/genarateAccesToken"
import { IUser, User } from "./user.model"
import httpStatus from 'http-status-codes'
import bcrypt from 'bcryptjs'
import { JwtPayload } from "jsonwebtoken"
const signUpInterface = async (payload: IUser) => {

    const isUserExistsByEmail = await User.findOne({ email: payload.email })
     if (isUserExistsByEmail) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User already exists')
    }
    const result = await User.create(payload)
    if (!result.email) {
        throw new AppError(httpStatus.BAD_REQUEST, 'user is not created')
    }

    const token = accessToken({ _id: result._id as unknown as Schema.Types.ObjectId, email: result.email })
    return { result, token }
}

const signInIntoDatabase = async (payload: IUser) => {
    const isUserExistsByEmail = await User.findOne({ email: payload.email })
    if (!isUserExistsByEmail) {
        throw new AppError(httpStatus.BAD_REQUEST, 'user is not found')
    }
    const isPasswordCorrect = await bcrypt.compare(payload.password, isUserExistsByEmail.password)
    if (!isPasswordCorrect) {
        throw new AppError(httpStatus.BAD_REQUEST, 'password is incorrect')
    }
    const token = accessToken({ _id: isUserExistsByEmail._id as unknown as Schema.Types.ObjectId, email: isUserExistsByEmail.email })
    return { isUserExistsByEmail, token }
}


const refreshToken = async (payload: JwtPayload) => {
    const isUserExistsByEmail = await User.findOne({ email: payload.email })
    if (!isUserExistsByEmail) {
        throw new AppError(httpStatus.BAD_REQUEST, 'user is not found')
    }
    const token = accessToken({ _id: isUserExistsByEmail._id as unknown as Schema.Types.ObjectId, email: isUserExistsByEmail.email })
    return { isUserExistsByEmail, token }
}


export const userService = {
    signUpInterface,
    signInIntoDatabase,
    refreshToken
}