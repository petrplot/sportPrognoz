const passport = require('passport')
const {Router} = require('express')
const router = Router()

router.get('/',  passport.authenticate('jwt', { session: false }), (req,res)=>{
	res.send('Home page')
})

module.exports = router