const { Router } = require('express');
const { authMdw } = require('../middleware/authMiddleware');
const { workoutPost, workoutPut, workoutDelete } = require('../controllers/workoutController');

const router = Router();

router.post('/workout/', authMdw, workoutPost);
router.put('/workout/:workoutID', authMdw, workoutPut);
router.delete('/workout/:workoutID', authMdw, workoutDelete);

module.exports = router;