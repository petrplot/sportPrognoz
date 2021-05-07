const {Schema, model} = require('mongoose');

const schema = new Schema({
	name:{type:String, required: true},
	description:{type:String, required: true},
	imageSrc:{type: String, default: ''},
	rating:{type:Number, default:1},
	reviews:{type:Number},
	bonus:{type:Number}
})

module.exports = model('Bookmaker', schema);