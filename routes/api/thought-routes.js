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
    .delete(deleteThought)

router
    .route('/:id')
    .post(addReaction)
    

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;