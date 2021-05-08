const errorHandler = require('../utilities/errorHandler')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports.register = async(req,res)=>{

	//find of user by email
	const candidate = await User.findOne({email:req.body.email})
	
	if (candidate) {

		res.status(409).json({
			message: "Данный email уже занят!"
		})

	} else {
		
		//create user
		const salt = bcrypt.genSaltSync(10)
		const password = req.body.password
		const user = new User({

			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(password, salt)

		})

		try {

			await user.save()
			res.status(201).json(user, console.log("Пользователь создан!"))
			
		} catch (e) {

			errorHandler(res, e)
			
		}
	}
}

module.exports.login = async()=>{
	
}