const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require: true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true});

userSchema.pre('save',async function(){
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password = hashedPassword;    
});

const User = mongoose.model('User', userSchema);
module.exports = User;