const User = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accessGroupId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
    },
  }, {});

  User.associate = (models) => {};

  return User;
};

export default User;