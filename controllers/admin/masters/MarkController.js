import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Mark, Student, Exam, Subject, Level, Class } = model;


export default {

    async getMarks(req, res) {
        try {
            const marks = await Mark.getList(req.query);
            res.status(ok).send({ marks });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    }
}


