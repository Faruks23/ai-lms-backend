import jwt from 'jsonwebtoken'
import config from '../config/config';
import { Schema } from 'mongoose';

type data = {
    _id: Schema.Types.ObjectId,
    email: string,

}


export const accessToken = (data: data) => {

    const token = jwt.sign({
        data: data
    }, config.jwt_access_secret as string, { expiresIn: '30d' });

    return token

}