const { Exercise } = require('../models/Exercise');
const { User } = require('../models/User');

// CREATE new exercise in a list of specific user (by user ID).
const exercisePost = async (req, res) => {
    try {
        const { userID } = req.user;
        const { name, measureType } = req.body;
        const exercise = await Exercise.create({ name, measureType, owner: userID });
        res.status(201).json({ message: 'Exercise created successfully!', exercise });

        const user = await User.findOne({ _id: userID });
        user.exercises.push(exercise._id);
        await user.save();
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

// UPDATE already existed exercise (by exercise ID) in a list of specific user.
const exercisePut = async (req, res) => {
    try {
        const { exerciseID } = req.params;
        const exercise = await Exercise.findOneAndUpdate({ _id: exerciseID }, req.body, { new: true });
        res.json(exercise);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

// DELETE specific exercise from list of specific user.
const exerciseDelete = async (req, res) => {
    try {
        const { exerciseID } = req.params;
        const exercise = await Exercise.deleteOne({ _id: exerciseID })
        res.json(exercise);

        const user = await User.findOne({ _id: req.user._id });
        user.exercises.pull({ _id: exerciseID });
        await user.save();
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };
};

module.exports = {
    exercisePost,
    exercisePut,
    exerciseDelete,
};