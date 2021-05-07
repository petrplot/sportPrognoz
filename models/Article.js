const {Schema, model} = require('mongoose');

const schema = new Schema({
	title:{type:String, required: true},
	text:{type:String, required: true},
	author:{type:String, default:"admin"},
	date:{type:Date, default:Date.now},
	description:{type:String, required: true},
	imageSrc:{type: String, default: ''}	
})

module.exports = model('Article', schema);