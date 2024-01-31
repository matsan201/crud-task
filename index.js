const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./src/routes/index')
// eslint-disable-next-line no-unused-vars
const archivoDB = require('./src/db')

const app = express()
const PORT = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/task', router)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
