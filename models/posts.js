'use strict';
module.exports = function (sequelize, DataTypes) {
  let posts = sequelize.define('post', {
    url: DataTypes.STRING, 
    title: DataTypes.STRING,
    description: DataTypes.STRING
  // }, {
  //   classMethods: {
  //     associate: function (models) {
  //       posts.belongsTo(models.admin)
  //     }
  //   }
  });
  return posts;
};