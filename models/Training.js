const {Schema, model} = require('mongoose');

const schema = new Schema({
	title:{type:String, required: true},
	text:{type:String, required: true},
	imageSrc:{type: String, default: ''}	
})

module.exports = model('Training', schema);