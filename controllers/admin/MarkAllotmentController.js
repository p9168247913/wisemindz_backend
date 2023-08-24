import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../custom/error-msg';

// models import here
import model from '../../db/models';
const { MarkAllotment } = model;

export default {

    async getMarkAllotments(req, res) {
        try {
            const markAllotments = await MarkAllotment.getList();
            res.status(ok).send({ markAllotments });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    },
}