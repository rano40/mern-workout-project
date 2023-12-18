const path =  require('path')
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')
const userRoutes = require('./routes/user')

// const __dirname = path.resolve()


// express App
const app = express();

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRouter)
app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"), (err) => {
        res.status(500).send(err)
    })
})

// app.get('/', (req, res) => {
//     res.json({mssg: "Welcome to Exercise Tracker App"})
// })

// Connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT);
    })
}).catch((error) => {
    console.log(error);
})


