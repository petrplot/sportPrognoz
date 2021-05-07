const {Router} = require('express')
const router = Router()
const controller = require('../../controllers/predictions')

router.get('/:spaId', controller.getBySpaId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router