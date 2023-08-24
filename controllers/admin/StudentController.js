import sCode from "../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

// models import here
import model from '../../db/models';
const { Student } = model;

export default {

    async getStudents(req, res) {
        try {
            const students = await Student.getList();
            res.status(ok).send({ students });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    }
}