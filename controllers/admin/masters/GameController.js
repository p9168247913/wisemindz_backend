import sCode from "../../../custom/status-codes";
const { ok, created, bad_request, server_error } = sCode;

import {
    getValidationErrMsg,
    getIdNotFoundCommonMsg,
    getServerErrorMsg,
} from '../../../custom/error-msg';

// models import here
import model from '../../../db/models';
const { Game } = model;


// validation import here
import validateGame from '../../../requests/gameRequest';


export default {
    async getGames(req, res) {
        try {
            const games = await Game.getList();
            res.status(ok).send({ games });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);

        }
    },
    async addGame(req, res) {
        try {
            const { error } = validateGame(req.body);
            if (error) return res.status(bad_request).send({ error: getValidationErrMsg(error) });
           
            const game = await Game.saveRecord(req.body);
            if (!game) return  res.status(server_error).send({ message: getServerErrorMsg() });
            res.status(created).send({ game });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
    async getGame(req, res) {
        try {
            const { id } = req.params;
            const recordExist = await Game.getRecordById(id);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('game') });
            res.status(ok).send({ game: recordExist });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
    async updateGame(req, res) {
        try {
            const { id } = req.params;
            const recordExist = await Game.updateRecord(id, req.body);
            if (!recordExist) return res.status(bad_request).send({ message: getIdNotFoundCommonMsg('game') });
            res.status(ok).send({ game: recordExist });
        } catch (e) {
            console.log(e);
            res.status(server_error).send(e);
        }
    },
}


