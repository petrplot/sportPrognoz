const Prediction =require('../models/Prediction')

module.exports.getAll = async(req, res)=>{
	try {
		const predictions = await Prediction.find()
		res.status(201).json(predictions)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async(req, res)=>{
	try {
		const prediction = await Prediction.findById(req.params.id)
		res.status(201).json(prediction)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async(req, res)=>{	
	try {
		if(req.user.admin){
			const prediction = new Prediction({
				plyer1:[{
					name:req.body.name,
					city:req.body.city
				}],
				plyer2:[{
					name:req.body.name,
					city:req.body.city
				}],
				Win:req.body.Win,
				lose:req.body.lose,
				draw:req.body.draw,
				kO:req.body.kO,
				when:req.body.when?req.body.when:undefined
				
			})
		await prediction.save()
		res.status(201).json(prediction)
		}
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

	const prediction = await Prediction.findByIdAndUpdate(
		updated._id, 
		updated,
		{new:true},
		function(err, prediction){
			if(err) return console.log(err)
			console.log("Обновленный объект", prediction)
		}
	)
		res.status(200).json(prediction)
	} catch (error) {
		errorHandler(res, error)
	}
}

module.exports.remove = async(req, res)=>{
	try {
		const{id} = req.params
		const prediction = await Prediction.findByIdAndDelete(id)

		res.status(200).json({
			message: 'Статья удалена.', prediction
		})	
	} catch (e) {
		errorHandler(res, e)
	}

}
