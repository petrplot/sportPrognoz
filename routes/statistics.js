const {Router} = require('express')
const router = Router()

router.get('/statistics',(req,res)=>{
	res.send('Statistics page')
})

module.exports = router