const {Router} = require('express')
const router = Router()

const controller = require('../controllers/articles')

router.get('/:id', controller.getByArticleId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router