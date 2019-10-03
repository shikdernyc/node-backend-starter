import { Model } from "sequelize"

export default (sequelize, DataTypes) => {
  class User extends Model { }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    { sequelize, modelName: "User" }
  );

  User.associate = function (models) {
    // USER Associations
  }

  return User;
};