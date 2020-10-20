const UserModel = require('../models/user.model');


function addOrUpdateUser(user) {

  const newUser = new UserModel(user)


  //TODO this exist call is redundant, I should just fetch the user and see if it is true or not


  UserModel.exists({username: user.username}, async (err, res) => {
    if (err) {
      // log the error
      console.log(`Error while checking if user exists on DB. Error: ${error}`);
    } else {
      if (res) {
        // user exists
        try {
          await UserModel.findOneAndUpdate({username: user.username}, user, {new:true})
          console.log('user found and tokens updated');
        } catch (error) {
          console.log(`Error while updating tokens for user. Error: ${error}`);
        }
      } else {
        // user doesn't exist
        try {
          await newUser.save()
          console.log('user not found and added to DB');
        } catch (error) {
          console.log(`Error while adding new user to DB. Error: ${error}`);
        }
      }
    }
  })
}


async function getUserFromDb(username) {
  try {
    return await UserModel.findOne({username})
  } catch (error) {
    console.log(`Error in getUserFromDb: ${error}`);
  }
}

module.exports = {
  addOrUpdateUser,
  getUserFromDb,
}