const express = require('express');

const router = express.Router();
const coursesControllers = require('../Controllers/coursesControllers');
const { courseValidationRules } = require('../Middleware/coursesMiddleware');

router.route ('/')
  .get(coursesControllers.getAllCourses)
  .post( courseValidationRules , coursesControllers.createNewCourse);


router.route('/:course_id')
  .get(coursesControllers.getSingleCourse)
  .patch(coursesControllers.updateCourse)
  .delete(coursesControllers.deleteCourse);

module.exports = router;