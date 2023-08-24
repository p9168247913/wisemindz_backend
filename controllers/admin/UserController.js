import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;
import bcrypt from 'bcryptjs';


import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../custom/error-msg';

import { generateToken, sendResetPasswordMail } from '../../custom/secure'
// models import here
import model from '../../db/models';
const { User } = model;

import validateForgetPassword from '../../requests/forgetPasswordRequest';

export default {
    async getUsers(req, res) {
        try {
          const users = await User.getList();
            res.status(ok).send({ users });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async getForgetPassword(req, res,) {
        try {
            const { error } = validateForgetPassword(req.body); 
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            const userExist = await User.checkUser(req.body);
            if (userExist) {
                const resetToken = generateToken();
                sendResetPasswordMail(userExist.email_id, resetToken);
                userExist.token = resetToken
                await userExist.save()
                res.status(ok).send({message: "Email send successfully", userExist})
            } else {
                res.status(bad_request).send({ error: { email_id: " This User not found."} })
            }

        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async setResetPassword(req, res,) {
        try {
            const { reqToken } = req.params;
            const { password } = req.body;
    
            const user = await User.findOne({ token: reqToken });
            if (user && user.token) {
                const newPassword = await bcrypt.hash(password, 10);
    
                user.password = newPassword;

                user.token = null
    
                await user.save();
    
                res.status(ok).send({ message: "Password reset successfully", user });
            } else {
                res.status(server_error).send({ error: "Error in resetting password" });
            }
        } catch (e) {
            console.log(e);
            res.status(server_error).send({ error: "Internal server error" });
        }
    }    
}