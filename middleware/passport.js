const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
//const mongoose = require('mongoose')
//const User = mongoose.model('users')
const User = require('../models/User')

const keys = require('../config/keys')

const option = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: keys.jwt
}

module.exports = passport => {
	passport.use(
		new JwtStrategy(option, async (payload, done) => {
			try {
				const user = await User.findById(payload.userId).select('email id admin')
				if (user) {
					done(null, user)
				} else {
					done(null, false)
				}
			} catch (e) {
				console.log(e)
			}
		})
	)
}