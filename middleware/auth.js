const passport = require("../passport");

const USER_TYPE=1;
const ADMIN_TYPE=2;
const SUPPORT_TYPE=3;
const DATA_ENTRY_TYPE=4;

const auth=
		{
			isAuthenticatedUser:function () {
				return passport.authenticate('user_jwt', { session: false })
			},
			isAuthenticatedAdmin:function () {
				return passport.authenticate('admin_jwt', { session: false })
			},
			isUser:function (req,res,next) {
				if(req.user.type===USER_TYPE){
					return next()
				}
				res.sendStatus(401)	
			},
			isAdmin:function (req,res,next) {
				if(req.user.type===ADMIN_TYPE){
					return next()
				}
				res.sendStatus(401)	
			},
			isSupport:function (req,res,next) {
				if(req.user.type===SUPPORT_TYPE){
					return next()
				}
				res.sendStatus(401)	
			},
			isDataEntry:function (req,res,next) {
				if(req.user.type===DATA_ENTRY_TYPE){
					return next()
				}
				res.sendStatus(401)	
			}
		}
module.exports = auth;