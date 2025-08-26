import catchAsync from "../../../utils/catchAsyc";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { userService } from "./user.service";

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



export const userController = {
     signUp
}