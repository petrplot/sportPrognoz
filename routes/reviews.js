const {Router} = require('express')
const router = Router()
const passport = require('passport')

const controller = require('../controllers/reviews')
const upload = require('../middleware/upload')

router.get('/:Id', controller.getById)
router.get('/', controller.getAll)
router.post('/', passport.authenticate('jwt', { session: false }), upload.single('image'), controller.create)
router.put('/update',passport.authenticate('jwt', { session: false }), upload.single('image'), controller.update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove)

module.exports = router