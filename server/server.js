//this decides what port to use. If none provided, it will create default of 8000
const PORT = process.env.PORT ?? 8000
const express = require('express')
//this will assign the methods of express() to the app class
const app = express()
const pool = require('./db')

//get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos');
        res.json(todos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//if something is running on the port then it will print message to console
app.listen(PORT, ( )=> console.log(`Server running on PORT' ${PORT}`))