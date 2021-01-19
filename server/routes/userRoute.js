const { Router } = require('express');
const { authMdw } = require('../middleware/authMiddleware');
const { userGet } = require('../controllers/userController');

const router = Router();

router.get('/user/', authMdw, userGet);

module.exports = router;