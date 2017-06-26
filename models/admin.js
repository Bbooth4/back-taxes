'use strict';
module.exports = function (sequelize, DataTypes) {
  let admin = sequelize.define('admin', {
    admin: DataTypes.STRING,
    password: DataTypes.STRING
  // }, {
  //   classMethods: {
  //     associate: function (models) {
  //       admin.hasMany(models.posts)
  //     }
  //   }
  });
  return admin;
};