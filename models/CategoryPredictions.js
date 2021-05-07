const {Schema, model} = require('mongoose');

const schema = new Schema({
	name:{type:String, required: true},
	quantity:{type:Number, default:0}
})

module.exports = model('CategoryPredictions', schema);