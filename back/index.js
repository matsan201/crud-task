const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT ?? 3000
// eslint-disable-next-line no-unused-vars
const archivoDB = require('./src/db')

app.use(morgan('dev'))
app.use(express.json())

app.use('/task', require('./src/routes/index'))

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
