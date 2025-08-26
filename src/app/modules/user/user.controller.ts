import catchAsync from "../../../utils/catchAsyc";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { userService } from "./user.service";
import { JwtPayload } from "jsonwebtoken";

const signUp = catchAsync(async (req, res) => {
    
    const data = req.body
    const result = await userService.signUpInterface(data)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User created successfully',
        data:result
    })
   
})


const signIn = catchAsync(async (req, res) => {
    const data = req.body
    const result = await userService.signInIntoDatabase(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User signed in successfully',
        data: result
    })
})


const refreshToken = catchAsync(async (req, res) => {

    const data = req.user
    const result = await userService.refreshToken(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Token refreshed successfully',
        data: result
    })
})

 export const userController = {
    signUp,
     signIn,
    refreshToken
    
}