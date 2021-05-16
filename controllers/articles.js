const Article = require('../models/Article')
//const articleUpdate = require('../service/articleService')
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

 module.exports.update = async(req, res)=>{
	
	try {
		const updated = req.body

	if(!updated._id){
		console.log(" id не указан")
	}

	if (req.file) {
		updated.imageSrc = req.file.path
	}

	const article = Article.findByIdAndUpdate(
		updated._id, 
		updated,
		{new:true},
		function(err, article){
			if(err) return console.log(err)
			console.log("Обновленный объект", article)
		}
	)
		res.status(200).json(article)
	} catch (error) {
		errorHandler(res, error)
	}
}

module.exports.remove = async(req, res)=>{
	try {
		const{id} = req.params
		const articleDel = await Article.findByIdAndDelete(id)

		res.status(200).json({
			message: 'Статья удалена.', articleDel
		})	
	} catch (e) {
		errorHandler(res, e)
	}

} 