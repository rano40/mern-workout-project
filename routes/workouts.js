const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout } = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workout
router.get('/', getWorkouts)


// GET a sinlge workout
router.get('/:id', getWorkout)


// POST a new workout
router.post('/', createWorkout)


// DELETE a workout
router.delete('/:id', deleteWorkout)
// router.delete('/:id', (req, res) => {
//     res.json({mssg: "DELETE a workout"})
// })

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router