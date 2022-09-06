const bcrypt = require("bcrypt");
const User = require("./entities/user.entity");

async function create(data) {
  const [user] = await User.find({ email: data.email });

  if (user) {
    return null;
  }

  // Here I am using becrypt to encrypt the password that was entered when signing up on the app
  const salt = await bcrypt.genSalt(10);

  // Here becrypt is being add to the password
  data.password = await bcrypt.hash(data.password, salt);

  const newUser = new User(data);

  // Once the password is encrypted the user is saved
  return newUser.save();
}

module.exports = {
  create,
};
