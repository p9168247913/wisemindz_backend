import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../custom/error-msg';

// models import here
import model from '../../db/models';
const { Role, School } = model;

// validation import here
import validateSchool from '../../requests/schoolRequest';

export default {

    async getSchools(req, res) {
        try {
            const schools = await School.getList();
            res.status(ok).send({ schools });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    },
    async addSchool(req, res) {
        try {
            const { error } = validateSchool(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });
            //check email id is already present
            const schoolExist = await School.checkSchool(req.body);
            if (schoolExist) return res.status(bad_request).send({ error: { email_id: " This email has been already used."} });
            
            const school = await School.saveRecord(req.body);
            if (!school) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(created).send({ school });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
    async deleteSchool(req, res) {
        try {
            const { id } = req.params;
            let recordExist = await School.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('school') });

            const school = await School.deleteRecord( recordExist );
            if (!school) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(ok).send({ school });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}