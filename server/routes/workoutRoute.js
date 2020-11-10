const { Router } = require('express');
const authMdw = require('../middleware/authMiddleware');
const { workoutGet, workoutPost, workoutPut, workoutDelete } = require('../controllers/workoutController');

const workoutRoute = Router();

workoutRoute.get('/workout/', authMdw, workoutGet);
workoutRoute.post('/workout/create', authMdw, workoutPost);
workoutRoute.put('/workout/update/:workoutID', authMdw, workoutPut);
workoutRoute.delete('/workout/delete/:workoutID', authMdw, workoutDelete);

module.exports = workoutRoute;