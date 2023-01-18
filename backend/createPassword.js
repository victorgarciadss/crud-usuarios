const userModel = require("./Models/userModel");

const bcrypt = require("bcrypt");


const createPassword = userModel.beforeCreate(async(user, options) => {
    return await bcrypt.hash(user.password, 10)
    .then(hash => user.password = hash)
    .catch(err => console.log(err))
});



module.exports = createPassword;
