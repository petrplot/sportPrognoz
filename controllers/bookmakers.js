const Bookmaker =require('../models/Bookmaker')

module.exports.getAll = async(req, res)=>{
	try {
		const bookmakers = await Bookmaker.find()
		res.status(201).json(bookmakers)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async(req, res)=>{
	try {
		const bookmaker = await Bookmaker.findById(req.params.id)
		res.status(201).json(bookmaker)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async(req, res)=>{	
	try {
		if(req.user.admin){
			const bookmaker = new Bookmaker({
				name:req.body.name,
				description:req.body.description,
				imageSrc:req.file?req.file.path:"",
				rating:1,//здесь нужно реализовать вычисление рейтинга
				reviews:1,//здесь нужно реализовать подсчет количества отзывов
				bonus:req.body.bonus
			})
		await bookmaker.save()
		res.status(201).json(bookmaker)
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

	const bookmaker = Bookmaker.findByIdAndUpdate(
		updated._id, 
		updated,
		{new:true},
		function(err, bookmaker){
			if(err) return console.log(err)
			console.log("Обновленный объект", bookmaker)
		}
	)
		res.status(200).json(bookmaker)
	} catch (error) {
		errorHandler(res, error)
	}
}

module.exports.remove = async(req, res)=>{
	try {
		const{id} = req.params
		const bookmaker = await Bookmaker.findByIdAndDelete(id)

		res.status(200).json({
			message: 'Статья удалена.', bookmaker
		})	
	} catch (e) {
		errorHandler(res, e)
	}

}