const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT ?? 3000
// eslint-disable-next-line no-unused-vars
const archivoDB = require('./src/db')

const app = express()
// eslint-disable-next-line no-undef
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/task', require('./src/routes/index'))



app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
