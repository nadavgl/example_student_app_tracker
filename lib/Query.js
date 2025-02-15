const client = require('../db/connection')


class Query {
    static async getStudents(){
        const sql = `
        SELECT 
        s.id AS student_id, 
        CONCAT(s.first_name, ' ', s.last_name) AS full_name,
        c.id AS course_id,
        course_name,
        course_type,
        g.id AS group_id,
        group_name,
        gleaders.first_name AS group_leader
        FROM students AS s
            JOIN courses AS c
                ON s.course_id = c.id
            LEFT JOIN groups As g 
                ON s.group_id = g.id
            LEFT JOIN students AS gleaders
                ON s.group_leader_id = gleaders.id
        ORDER BY student_id;
        `;
        const data = await client.query(sql)
        return data.rows;

    }

    static async getCourses(){
        const sql = 'SELECT * FROM courses'

        const data = await client.query(sql)

        return data.rows;
    }

    static async addCourse(formData){
        const sql = 'INSERT INTO courses (course_name, course_type) VALUES ($1, $2)';
        
        await client.query(sql,[anformDat.course_name, anformData.course_type])

        console.log('Course created successfuly\n')
    }
    static async addStudent(formData){
        const sql = 'INSERT INTO students (first_name, last_name, course_id) VALUES ($1, $2, $3)';
        await client.query(sql, [formData.first_name, formData.last_name, formData.course_id]);

        console.log('Student created succesfully!\n')
    }

  
}


module.exports = Query;