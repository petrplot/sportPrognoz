const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const errorHandler = require('../utilities/errorHandler')
const User = require('../models/User')
const keys = require('../config/keys')

module.exports.register = async(req,res)=>{

	//find of user by email
	const candidate = await User.findOne({email:req.body.email})
	
	if (candidate) {

		res.json(409, {
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
			res.json(201, user, console.log("Пользователь создан!"))
			
		} catch (e) {

			errorHandler(res, e)
			
		}
	}
}

module.exports.login = async(req,res)=>{

	try {

		//ищем пользователя по email
		const candidate = await User.findOne({email:req.body.email})

		if (candidate) {

			//сверяем пароли
			const passRes = bcrypt.compareSync(req.body.password, candidate.password)

			if(passRes){

				//создаем токен
				const token = jwt.sign({
					email:candidate.email,
					userId:candidate._id
				},keys.jwt,{ expiresIn: "1h" })

				res.status(200).json({token:`Bearer ${token}`})

			}else {

				//пароли не совпали
				res.status(401).json({
					message: 'Неверный пароль!'
				})
			
			}
			
		}else{

				// пользователь не найден
			res.status(404).json({
				message: ' Пользователь с таким email не найден!'
			})

		}
		
	} catch (e) {
		
		errorHandler(res, e)

	}
	
}
