import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Class } = model;

// validation import here
import validateClass from '../../../requests/classRequest';

export default {
    async getClasses(req, res) {
        try {
            const classes = await Class.getList();
            res.status(ok).send({ classes });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    },
    async getClass(req, res) {
        try {
            const { id } = req.params;
            const recordExist = await Class.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('class') });
            res.status(ok).send({ class: recordExist });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },

    async addClass(req, res) {
        try {
            const { error } = validateClass(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });
            const addClass = await Class.saveRecord(req.body);
            if (!addClass) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(created).send({ addClass });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
}


