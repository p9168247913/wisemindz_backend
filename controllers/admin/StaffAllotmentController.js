import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../custom/error-msg';

// models import here
import model from '../../db/models';
const { StaffAllocation  } = model;

export default {

    async getStaffAllotments(req, res) {
        try {
            const staffAllocations = await StaffAllocation.getList();
            res.status(ok).send({ staffAllocations });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
}