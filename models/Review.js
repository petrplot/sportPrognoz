const {Schema, model} = require('mongoose');

const schema = new Schema({
	User:{ref: 'User',type: Schema.Types.ObjectId},
	imageSrc:{type: String, default: ''},
	text:{type: String, default: ''},
	date:{type:Date, default:Date.now},
})

module.exports = model('Review', schema);