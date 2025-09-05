const { findUSer, createUser } = require("../repository/userRepository");

async function createUserService(userDetail) {
    //check if the email already exist or not 
    const user = await findUSer({
        email : userDetail.email
    });

    if(user){
        throw {reason : "user already exist", statusCode : 400}
    };

    //making new user if user not exist
    const newUser = await createUser({
        name : userDetail.name,
        email : userDetail.name,
        password : userDetail.password
    });

    if(!newUser){
        throw {reason : "error in creating user", statusCode : 500};
    };

    return newUser;
}
module.exports = {
    createUserService
};