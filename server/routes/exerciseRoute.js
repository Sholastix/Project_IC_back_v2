const { Router } = require('express');
const authMdw = require('../middleware/authMiddleware');
const { exerciseGet, exerciseExactGet, exercisePost, exercisePut, exerciseDelete } = require('../controllers/exerciseController');

const exerciseRoute = Router();

exerciseRoute.get('/exercise/', authMdw, exerciseGet);
exerciseRoute.get('/exercise/:exerciseID', authMdw, exerciseExactGet);
exerciseRoute.post('/exercise/create', authMdw, exercisePost);
exerciseRoute.put('/exercise/update/:exerciseID', authMdw, exercisePut);
exerciseRoute.delete('/exercise/delete/:exerciseID', authMdw, exerciseDelete);

module.exports = exerciseRoute;