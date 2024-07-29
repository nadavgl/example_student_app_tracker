const router = require('express').Router();
const { request, response } = require('express');
const Query = require('../lib/Query')

// GET ROUTES

// GET route to send all students
// localhost:3333/api/students 
router.get('/students', async (request, response) =>{
    const students = await Query.getStudents();
    response.json(students)
})

router.get('/courses', async (request, response) =>{
    const courses = await Query.getCourses();
    response.json(courses)
})


// CREATE ROUTES

// POST Create a course
// Post request to localhost:3333/api/courses
router.post('/courses', async(request, response) =>{
    const formData = request.body;

    await Query.addCourse(formData);

    response.json({
        message: 'Course created sucecssfully'
    })
})

// POST Create a course
// Post request to localhost:3333/api/students
router.post('/students', async(request, response) =>{
    const formData = request.body;

    await Query.addStudent(formData);

    response.json({
        message: 'Student created sucecssfully'
    })
})


module.exports = router