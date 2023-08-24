import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../custom/error-msg';

// models import here
import model from '../../db/models';
const { Staff } = model;

// validation import here
import validateStaff from '../../requests/staffRequest';

export default {
    async getStaffs(req, res) {
        try {
          const staffs = await Staff.getList();
            res.status(ok).send({ staffs });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}