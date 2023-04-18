const config = require('../config/config');
const { userService } = require('../services');

module.exports = function (app, db) {
  return new Promise(function (resolve) {
    const User = db.model('User');
    User.findOne({ email: config.super_admin.email }, function (err, user) {
      if (err) throw err;
      if (!user) {
        const newAdmin = new User(config.super_admin);
        userService.createUser(newAdmin);
        resolve();
      } else {
        resolve();
      }
    });
  });
};
