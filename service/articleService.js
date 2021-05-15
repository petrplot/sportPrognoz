const Article = require('../models/Article')

module.exports = articleCreate = (data) => {

	if(data.user.admin){
		const article = new Article({
			title: data.body.title,
			text: data.body.text,
			description: data.body.description,
			author: data.body.author ? data.body.author: undefined,
			imageSrc: data.file ? data.file.path : ''
		})
		return article
	}
}

module.exports = articleGetById = (data) => {

	const article = Article.findById(data.params.id)

	return article

}

module.exports = articleGetAll = (data) => {
	
	const articles = Article.find()
	return articles
	
}

// module.exports = articleUpdate = (data) => {
// 	const updated = data.body

// 	if(!updated._id){
// 		console.log(" id не указан")
// 	}

// 	if (data.file) {
// 		updated.imageSrc = data.file.path
// 	}

// 	const article = Article.findByIdAndUpdate(
// 		updated._id, 
// 		updated,
// 		{new:true},
// 		function(err, article){
// 			if(err) return console.log(err)
// 			console.log("Обновленный объект", article)
// 		}
// 	)
// 	return article	
// }



