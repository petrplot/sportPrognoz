const mongoose = require('mongoose')
const express = require('express')
const app = express()

const keys = require('./config/keys')

module.exports = async function start() {
	try {
		await mongoose.connect(keys.mongoUri,{
			useNewUrlParser: true,
			useUnifiedTopology:true,
			useCreateIndex:true
		})
		.then(() => console.log('MongoDB connected'))
		.catch(err => console.log(err))

		app.listen(keys.PORT,()=>{
			console.log(`Сервер запущен на порту ${keys.PORT}`)
		})
		
	} catch (e) {
		console.log('Server error',e.message)
		process.exit(1)
	}
}


