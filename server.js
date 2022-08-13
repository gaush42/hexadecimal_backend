const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

const detailsRouter = require('./routes/details')

app.use('/api/details',detailsRouter)

app.listen(5000, () => {
    console.log('Server running on port 5000')
})