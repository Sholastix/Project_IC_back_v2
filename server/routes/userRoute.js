const { Router } = require('express');
const authMdw = require('../middleware/authMiddleware');
const { userGet, userDelete } = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/users/', authMdw, userGet);
userRoute.delete('/users/delete/', authMdw, userDelete);

module.exports = userRoute;