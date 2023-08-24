import sCode from "../../../custom/status-codes";
const { ok, bad_request, un_authorized, server_error } = sCode;

import { getValidationErrMsg } from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { School } = model;

// validation import here
import validateLogin from '../../../requests/loginSchoolRequest';

export default {
    async getLogin(req, res) {
        try {
            const { error } = validateLogin(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });

            const school = await School.getSchool(req.body);
            if (!school) return res.status(bad_request).send({ error: { email_id: "Email does't exists."} });

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