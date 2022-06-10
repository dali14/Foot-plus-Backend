const  jwt =require( "jsonwebtoken");
const User=require('../models/User');

const auth = async (req, res, next) => {
	const token = req.header("x-access-token");
	if (!token){
		return res
			.status(403)
			.json({ error: true, message: "Access Denied: No token provided" });
		}

	try {
		const tokenDetails = jwt.verify(
			token,
			process.env.ACCESS_TOKEN_PRIVATE_KEY
		);
		let tk = tokenDetails;
		let user = await User.User.findOne({_id:tk._id});
		res.json(user);
		next();
	} catch (err) {
		console.log(err);
		
		res
			.status(403)
			.json({ error: true, message: "Access Denied: Invalid token" });
	}
};

module.exports=auth;