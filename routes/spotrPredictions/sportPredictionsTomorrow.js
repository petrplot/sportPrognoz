const {Router} = require('express')
const router = Router()

router.get('/sptw',(req,res)=>{
	res.send('Sport predictions tomorrow page')
})

module.exports = router