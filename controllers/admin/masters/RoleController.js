import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Role } = model;

export default {
    async getRoles(req, res) {
        try {
            const roles = await Role.getList();
            res.status(ok).send({ roles });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    }
}


