const {Router} = require('express')
const router = Router()

router.get('/listArticles',(req,res)=>{
	res.send('List articles page')
})

module.exports = router