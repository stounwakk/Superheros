import express from 'express'


import heroRouter from './routers/superheroRouter.js'

const app = express()



app.use(express.json())
app.use('/superhero',heroRouter)



async function start() {
    app.listen(3000,()=> console.log('Server is running...'))
}

start()