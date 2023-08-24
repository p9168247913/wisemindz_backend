import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Exam } = model;


export default {
    async getExams(req, res) {
        try {
            const exams = await Exam.getList();
            res.status(ok).send({ exams });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    }
}


