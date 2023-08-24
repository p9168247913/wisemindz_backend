import sCode from "../../../custom/status-codes";
const { ok, bad_request, un_authorized, server_error } = sCode;

import { getValidationErrMsg } from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { User } = model;

// validation import here
import validateLogin from '../../../requests/loginRequest';

export default {
    async getLogin(req, res) {
        try {
            const { error } = validateLogin(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async getLogout(req, res) {
        try {
            res.status(ok).send({ message: "logout successfully" });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
};