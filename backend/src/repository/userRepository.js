const User = require("../schema/userSchema");

//function for finding user
async function findUSer(parameter) {
    try{
        const response = await User.findOne({
            ...userDetails
        });
        return response;
    }catch(error){
        console.log('error in finding user ', error);
    }
}

//function for creating user
async function createUser(userDetail) {
    try {
        const response = await User.create(userDetail);
        return response;
    } catch (error) {
        console.log('error in finding user', error);
    }
}

module.exports = {
    createUser,
    findUSer
}