const Review =require('../models/Review')

module.exports.getAll = async(req, res)=>{
	try {
		const reviews = await Review.find()
		res.status(201).json(reviews)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async(req, res)=>{
	try {
		const review = await Review.findById(req.params.id)
		res.status(201).json(review)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async(req, res)=>{	
	try {
		const review = new Review({
			imageSrc:req.file?req.file.path:"",
			text:req.body.text,
		})
	await review.save()
	res.status(201).json(review)
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

	const review = await Review.findByIdAndUpdate(
		updated._id, 
		updated,
		{new:true},
		function(err, review){
			if(err) return console.log(err)
			console.log("Обновленный объект", review)
		}
	)
		res.status(200).json(review)
	} catch (error) {
		errorHandler(res, error)
	}
}

module.exports.remove = async(req, res)=>{
	try {
		const{id} = req.params
		const review = await Review.findByIdAndDelete(id)

		res.status(200).json({
			message: 'Статья удалена.', review
		})	
	} catch (e) {
		errorHandler(res, e)
	}

}
