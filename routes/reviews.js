const {Router} = require('express')
const router = Router()
const controller = require('../controllers/reviews')

router.get('/:reviewId',controller.getByReviewId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router