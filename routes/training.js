const {Router} = require('express')
const router = Router()
const controller = require('../controllers/trainings')

router.get('/:trainingId',controller.getByTrainingId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router