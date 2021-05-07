const {Router} = require('express')
const router = Router()
const controller = require('../controllers/auth')

router.post('/reg', controller.register)
router.post('/log', controller.login)

module.exports = router