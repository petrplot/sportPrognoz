const articleCreate = require('../service/articleService')
const errorHandler = require('../utilities/errorHandler')

module.exports.getByArticleId = async()=>{

}
module.exports.create = async(req, res)=>{
	
	const article = articleCreate(req)

	try {

		await article.save()
		res.status(201).json(article)
		
	} catch (e) {

		errorHandler(res, e)

	}
}

module.exports.update = async()=>{

}
module.exports.remove = async()=>{

}