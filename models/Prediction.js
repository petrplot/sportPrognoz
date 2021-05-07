const {Schema, model} = require('mongoose');

const schema = new Schema({
	plyer1:[{
		name:{type:String, required: true},
		city:{type:String}
	}],
	plyer2:[{
		name:{type:String, required: true},
		city:{type:String}
	}],
	date:{type:Date, default:Date.now},
	category:{ ref:'CategoryPredictions',type: Schema.Types.ObjectId},
	Win:{type:Number},
	lose:{type:Number},
	draw:{type:Number},
	kO:{type:Number},
	when:{type:String, default:"today"}
})

module.exports = model('Prediction', schema);