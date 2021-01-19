const { Router } = require('express');
const { authMdw } = require('../middleware/authMiddleware');
const { exercisePost, exercisePut, exerciseDelete } = require('../controllers/exerciseController');

const router = Router();

router.post('/exercise/', authMdw, exercisePost);
router.put('/exercise/:exerciseID', authMdw, exercisePut);
router.delete('/exercise/:exerciseID', authMdw, exerciseDelete);

module.exports = router;