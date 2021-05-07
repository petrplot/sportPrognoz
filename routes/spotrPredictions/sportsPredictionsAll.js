const {Router} = require('express')
const router = Router()

router.get('/spt',(req,res)=>{
	res.send('Sport predictions All page')
})

module.exports = router