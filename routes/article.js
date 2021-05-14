const {Router} = require('express')
const passport = require('passport')
const router = Router()

const controller = require('../controllers/articles')
const upload = require('../middleware/upload')

router.get('/:id', controller.getById)
router.get('/all', controller.getAll)
router.post('/create', passport.authenticate('jwt', { session: false }), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', { session: false }), upload.single('image'), controller.update)
router.delete('/remove', passport.authenticate('jwt', { session: false }),controller.remove)

module.exports = router