import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

// models import here
import model from '../../../db/models';
const { Subject, Level, Class } = model;

export default {
    async getSubjects(req, res) {
        try {
            const subjects = await Subject.getList();
            res.status(ok).send({ subjects });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    },
   
}


