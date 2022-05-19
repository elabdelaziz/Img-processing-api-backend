import express from 'express'
import { clientInputValidations } from './middleware/clientInputValidations'
import resizeImage from './modules/resizeImage'

const app = express()
const PORT = 3000

app.get('/process', clientInputValidations, resizeImage)

app.listen(PORT, (): void => console.log(`server running at ${PORT}`))

export default app
