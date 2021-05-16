const Training =require('../models/Training')

module.exports.getAll = async(req, res)=>{
	try {
		const trainings = await Training.find()
		res.status(201).json(trainings)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async(req, res)=>{
	try {
		const training = await Training.findById(req.params.id)
		res.status(201).json(training)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async(req, res)=>{	
	try {
		if(req.user.admin){
			const training = new Training({
				title:req.body.title,
				text:req.body.text,
				imageSrc:req.file?req.file.path:""
			})
			await training.save()
			res.status(201).json(training)
		}
	} catch (e) {
		errorHandler(res, e)
	}
}

 module.exports.update = async(req, res)=>{
	try {
		if(req.user.admin) {
			const updated = req.body
			if(!updated._id){
				console.log(" id не указан")
			}
			if (req.file) {
				updated.imageSrc = req.file.path
			}
			const training = await Training.findByIdAndUpdate(
				updated._id, 
				updated,
				{new:true},
				function(err, training){
					if(err) return console.log(err)
					console.log("Обновленный объект", training)
				}
			)
			res.status(200).json(training)
		}
	} catch (error) {
		errorHandler(res, error)
	}
}

module.exports.remove = async(req, res)=>{
	try {
		if (req.user.admin) {
			const{id} = req.params
			const training = await Training.findByIdAndDelete(id)
			res.status(200).json({
				message: 'Статья удалена.', training
			})
		}
	} catch (e) {
		errorHandler(res, e)
	}

}
