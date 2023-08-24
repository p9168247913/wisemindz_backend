import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

// models import here
import model from '../../db/models';
const { Staff } = model;

export default {
    async getStaffs(req, res) {
        try {
          const staffs = await Staff.getList();
            res.status(ok).send({ staffs });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
}