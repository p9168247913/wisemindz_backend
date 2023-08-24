import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Designation } = model;

export default {
    async getDesignations(req, res) {
        try {
            const designations = await Designation.getList();
            res.status(ok).send({ designations });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    }
}


