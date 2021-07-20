const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(addThought);

router
    .route('/:id')
    // .post(addThought)
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:thoughtId/:reactions')
    .post(createReaction);
    // .delete(deleteThought)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;