const { Router } = require('express');
const { authMdw } = require('../middleware/authMiddleware');
const { workoutGet, workoutPost, workoutPut, workoutDelete } = require('../controllers/workoutController');

const router = Router();

router.get('/workout/', authMdw, workoutGet);
router.post('/workout/', authMdw, workoutPost);
router.put('/workout/update/:workoutID', authMdw, workoutPut);
router.delete('/workout/delete/:workoutID', authMdw, workoutDelete);

module.exports = router;