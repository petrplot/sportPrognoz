const {Router} = require('express')
const router = Router()
const controller = require('../controllers/bookmakers')

router.get('/:bookmakerId', controller.getByBookmakerId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router