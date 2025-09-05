const { createUserService } = require("../service/userService");

async function signUpUser(req, res) {
    const userDetail = req.body;
    try{
        const response = await createUserService(userDetail);
        return res.status(201).json({
            success : true,
            error : {},
            message : "user created successfully",
            data : response
        });
    }catch(error){
        console.log("error in userController ", error);
        return res.status(error.statusCode||500).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        });
    }
}

module.exports = {
    signUpUser
}