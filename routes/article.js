const {Router} = require('express')
const router = Router()

const controller = require('../controllers/articles')
const upload = require('../middleware/upload')

router.get('/:id', controller.getByArticleId)
router.post('/', upload.single('image'), controller.create)
router.patch('/:id', upload.single('image'), controller.update)
router.delete('/:id', controller.remove)

module.exports = router