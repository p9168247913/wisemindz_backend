import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

// models import here
import model from '../../../db/models';
const { Level } = model;

export default {
    async getLevels(req, res) {
        try {
            const levels = await Level.getList();
            res.status(ok).send({ levels });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    }
}


