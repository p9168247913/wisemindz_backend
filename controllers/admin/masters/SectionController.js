import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Section } = model;

export default {
    async getSections(req, res) {
        try {
            const sections = await Section.getList();
            res.status(ok).send({ sections });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}


