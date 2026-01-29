const { validationResult} = require('express-validator');
const Course = require('../Models/course.model');


const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
}
const getSingleCourse = async(req, res) => {
  const course = await Course.findById(req.params.course_id);
  if (!course) {
    return res.status(404).json ({ error: 'Course not found' });
  }
  res.json(course);
}

const createNewCourse =async(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  const newCourse = new Course(req.body);
  const course = await newCourse.save();
  res.status(201).json(course);
}

const updateCourse = async (req, res) => {
  try {
  const updatedCourse = await Course.updateOne({_id: req.params.course_id}, {$set: {...req.body}});
  return res.status(200).json(updatedCourse);
} 
  catch (error) {
    return res.status(404).json ({ error: 'Course not found' });
  }
}

const deleteCourse = async (req, res) => {
  const deleteCourse = await Course.deleteOne({_id: req.params.course_id});
  res.json({ message: "Deleted" });
}
module.exports = {
  getAllCourses,
  getSingleCourse,
  createNewCourse,
  updateCourse,
  deleteCourse
}  
