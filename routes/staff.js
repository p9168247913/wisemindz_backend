import express from "express";
const staffRouter = express.Router();

// import authToken from '../middleware/authToken'; // Auth token Middleware

/* Routes for Login */
import loginControl from '../controllers/staff/auth/LoginController';
staffRouter.route('/login').post(loginControl.getLogin); 
staffRouter.route('/logout').post(loginControl.getLogout);

/* Routes for Staff */
import staffControl from '../controllers/staff/StaffController';
staffRouter.route('/staffs').get(staffControl.getStaffs);

export default staffRouter;