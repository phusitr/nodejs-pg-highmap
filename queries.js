const Pool = require('pg').Pool
const pool = new Pool({
  user: 'redcat',
  host: 'localhost',
  database: 'dbhighmap_example',
  password: 'std12345',
  port: 5432,
})

const getAllData = (request, response) => {
  pool.query('SELECT * FROM public.th ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
   getAllData
}
