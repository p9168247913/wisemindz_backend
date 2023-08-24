import express from "express";
const apiRouter = express.Router();

import authToken from '../middleware/authToken'; // Auth token Middleware


/* Routes for Login */
import schoolLoginControl from '../controllers/admin/login/LoginController';
apiRouter.route('/login').post(schoolLoginControl.getLogin); 
apiRouter.route('/logout').post(schoolLoginControl.getLogout);

/* Routes for User */
import userControl from '../controllers/admin/UserController';
apiRouter.route('/users').get(authToken, userControl.getUsers);
apiRouter.route('/forgot-password').post(userControl.getForgetPassword);
apiRouter.route('/reset-password/:reqToken').post(userControl.setResetPassword);

/* Routes for Role */
import roleControl from '../controllers/admin/masters/RoleController';
apiRouter.route('/roles').get(roleControl.getRoles);

/* Routes for Designation */
import designationControl from '../controllers/admin/masters/DesignationController';
apiRouter.route('/designations').get(designationControl.getDesignations);

/* Routes for class */
import classControl from '../controllers/admin/masters/ClassController';
apiRouter.route('/classes').get(classControl.getClasses);
apiRouter.route('/classes').post(classControl.addClass);

/* Routes for Section */
import sectionControl from '../controllers/admin/masters/SectionController';
apiRouter.route('/sections').get(sectionControl.getSections);

/* Routes for Level */
import levelControl from '../controllers/admin/masters/LevelController';
apiRouter.route('/levels').get(levelControl.getLevels);

/* Routes for Subject */
import subjectControl from '../controllers/admin/masters/SubjectController';
apiRouter.route('/subjects').get(subjectControl.getSubjects);

/* Routes for Exam */
import examControl from '../controllers/admin/masters/ExamController';
apiRouter.route('/exams').get(examControl.getExams);

/* Routes for Game */
import gameControl from '../controllers/admin/masters/GameController';
apiRouter.route('/games').get(gameControl.getGames);
apiRouter.route('/games-add').post(gameControl.addGame);
apiRouter.route('/game/:id').get(gameControl.getGame);
apiRouter.route('/game-update/:id').put(gameControl.updateGame);

/* Routes for Mark */
import markControl from '../controllers/admin/masters/MarkController';
apiRouter.route('/marks').get(markControl.getMarks);

/* Routes for School */
import schoolControl from '../controllers/admin/SchoolController';
apiRouter.route('/schools').get(schoolControl.getSchools);
apiRouter.route('/school-add').post(schoolControl.addSchool);
apiRouter.route('/school-delete/:id').delete(schoolControl.deleteSchool);

/* Routes for Staff */
import staffControl from '../controllers/admin/StaffController';
apiRouter.route('/staffs').get(staffControl.getStaffs);

/* Routes for Student */
import studentControl from '../controllers/admin/StudentController';
apiRouter.route('/students').get(studentControl.getStudents);

/* Routes for Staff-Allotments */
import staffAllotmentControl from '../controllers/admin/StaffAllotmentController';
apiRouter.route('/staff-allotments').get(staffAllotmentControl.getStaffAllotments);

/* Routes for Mark-Allotment */
import markAllotmentControl from '../controllers/admin/MarkAllotmentController';
apiRouter.route('/mark-allotments').get(markAllotmentControl.getMarkAllotments);

export default apiRouter;