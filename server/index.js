import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';

import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const port = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})