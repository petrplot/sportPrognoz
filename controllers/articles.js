const Article = require('../models/Article')
const errorHandler = require('../utilities/errorHandler')

module.exports.getByArticleId = async()=>{

}
module.exports.create = async(req, res)=>{

	if(req.user.admin){
		const article = new Article({
			title: req.body.title,
			text: req.body.text,
			description: req.body.description,
			author: req.body.author ? req.body.author: undefined,
			imageSrc: req.file ? req.file.path : ''
		})
	

		try {

			await article.save()
			res.status(201).json(article)
			
		} catch (e) {

			errorHandler(res, e)

		}
	}
}
module.exports.update = async()=>{

}
module.exports.remove = async()=>{

}