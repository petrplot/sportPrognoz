const Article = require('../models/Article')
const articleCreate = require('../service/articleService')
const articleGetById = require('../service/articleService')
const articleGetAll = require('../service/articleService')
const errorHandler = require('../utilities/errorHandler')

module.exports.getAll = async(req, res)=>{
	try {
		
		const articles = await articleGetAll(req)

		res.status(201).json(articles)
		
	} catch (e) {

		errorHandler(res, e)

	}

}

module.exports.getById = async(req, res)=>{
	try {
		
		const article = await articleGetById(req)

		res.status(201).json(article)
		
	} catch (e) {

		errorHandler(res, e)

	}

}
module.exports.create = async(req, res)=>{
	
	try {
		
		const article = await articleCreate(req)

		await article.save()
		res.status(201).json(article)
		
	} catch (e) {

		errorHandler(res, e)

	}
}

module.exports.update = async()=>{

}
module.exports.remove = async(req, res)=>{
	
	try {

		await Article.deleteOne({ ObjectID :req.params.id },(err, doc)=>{

			if(err) return console.log(err)
     
			console.log(" Статья удалена.", doc)
		})
		
		res.status(200).json({
			message: 'Статья удалена.'
		})
		
	} catch (e) {

		errorHandler(res, e)

	}

}