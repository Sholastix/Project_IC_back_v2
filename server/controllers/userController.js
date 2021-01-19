const { User } = require('../models/User');

// GET full profile of specific user (by user ID).
const userGet = async (req, res) => {
    try {
        const { userID } = req.user;
        const user = await User.findOne({ _id: userID })
            .populate({ path: 'exercises', model: 'Exercise' })
            .populate({ path: 'workouts', model: 'Workout' });
        if (!user) {
            throw new Error('User not found.');
        };

        res.json({
            _id: user._id,
            email: user.email,
            active: user.active,
            exercises: user.exercises,
            workouts: user.workouts,
        });
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

module.exports = {
    userGet,
};