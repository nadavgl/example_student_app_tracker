const { Pool } = require('pg')
const is_prod = process.env.NODE_ENV === 'production'

console.log('IS PROD', is_prod)

const localConnection={
    user: 'postgres',
    password: 'pass',
    database: 'student_app_db'
}

const renderConnection = {
    connectionString: process.env.DB_URL,
    ssl:{
        rejectUnauthorized: false
    },
}

const connectObj = is_prod ? renderConnection : localConnection;

const client = new Pool (connectObj)

module.exports = client