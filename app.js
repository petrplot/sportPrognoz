const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const multer  = require("multer")

const keys = require('./config/keys')
const reviewRout = require('./routes/reviews')
const privateOfficeRout = require('./routes/private office')
const homeRout = require('./routes/home')
const authRout = require('./routes/auth')
const articleRout = require('./routes/article')
const listArticleRout = require('./routes/listArticles')
const statisticsRout = require('./routes/statistics')
const trainingRout = require('./routes/training')
const bookmakerRout = require('./routes/bookmaker')

const sportPredictionsTodayRout = require('./routes/spotrPredictions/sportPredictionsToday')
const sportPredictionsTomorrowRout = require('./routes/spotrPredictions/sportPredictionsTomorrow')
const sportPredictionsAllRout = require('./routes/spotrPredictions/sportsPredictionsAll')

async function start() {
	try {
		await mongoose.connect(keys.mongoUri,{
			useNewUrlParser: true,
			useUnifiedTopology:true,
			useCreateIndex:true,
			useFindAndModify: false
			
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
start()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use('/uploads', express.static('uploads'))

app.use('/', homeRout)
app.use('/review', reviewRout)
app.use('/private_office', privateOfficeRout)
app.use('/auth', authRout)
app.use('/article', articleRout)
app.use('/', listArticleRout)
app.use('/', statisticsRout)
app.use('/training', trainingRout)
app.use('/bookmaker', bookmakerRout)
app.use('/', sportPredictionsTodayRout)
app.use('/', sportPredictionsTomorrowRout)
app.use('/spa', sportPredictionsAllRout)




